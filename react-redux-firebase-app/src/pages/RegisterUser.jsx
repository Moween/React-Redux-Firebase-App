import React from 'react';
import Registration from '../utils/registration';
import { useDispatch } from 'react-redux';

const RegisterUser = () => {
  const dispatch = useDispatch();
  return <Registration dispatch={dispatch} />;
};

export default RegisterUser;
