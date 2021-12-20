import React from 'react';
import Login  from '../utils/login';
import { useDispatch } from 'react-redux';

const LoginUser = () => {
  const dispatch = useDispatch();
  return <Login dispatch={dispatch} />
}

export default LoginUser;
