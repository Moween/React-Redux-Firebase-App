import React from 'react';
import Login  from '../utils/loginUser';
import { useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

const LoginUser = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const loginUserWithEmail = async({ email, password }) => {
    await firebase.login({ email, password })
  }

  return <Login dispatch={dispatch} loginUser={loginUserWithEmail}/>
}

export default LoginUser;
