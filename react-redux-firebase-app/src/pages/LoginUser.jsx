import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Login from '../layout/form/LoginUser';

const LoginUser = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();

  const loginUserWithEmail = async ({ email, password }) => {
    try {
      await firebase.login({ email, password });
      toast.success('You are signed in');
      navigate('/', { replace: true });
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
      className=""
    >
      <Box sx={{ width: { xs: '70%', sm: '50%', lg: '30%' }, m: '0 auto' }}>
        <Login loginUser={loginUserWithEmail} />
        <Link
          sx={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
          href="/registeruser"
        >
          Already have an account? Register
        </Link>
      </Box>
    </Box>
  );
};

export default LoginUser;
