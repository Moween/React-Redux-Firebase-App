import React from 'react';
import Registration from '../utils/registerUser';
import { useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

const RegisterUser = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const createNewUser = async ({ email, password, username }) => {
    await firebase.createUser({ email, password }, { username, email });
  };

  return <Registration  dispatch={dispatch} registerUser={createNewUser}/>;
};

export default RegisterUser;
