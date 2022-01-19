import React from 'react';
import { useNavigate } from 'react-router-dom';
import { firestoreConnect, useFirebase } from 'react-redux-firebase';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import Registration from '../layout/form/RegisterUser';

const RegisterUser = () => {
  const navigate = useNavigate();
  const firestore = useFirestore();
  const { createUser } = useFirebase();
  const { uid } = useSelector((state) => state.firebase.auth);

  const createNewUser = async ({ email, password, username }) => {
    try {
      await createUser({ email, password }, { username, email });
      await firestore.collection('users').doc(uid);
      toast.success('Signup successfull!!');
      navigate('/', { replace: true});
    } catch (error) {
      const errorMsg = error.message
        .replace(')', '')
        .replace(/-/g, ' ')
        .split('/')
        .pop();
      toast.error(errorMsg);
    }
  };

  return (
    <Box sx={{ width: { xs: '70%', sm: '50%', lg: '30%' }, m: '0 auto' }}>
      <Registration registerUser={createNewUser} />
      <Link
        sx={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
        href="/loginuser"
      >
        Already have an account? Log in
      </Link>
    </Box>
  );
};

export default RegisterUser;
