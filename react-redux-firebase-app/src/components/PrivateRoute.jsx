import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoaded, isEmpty } = useSelector((state) => state.firebase.auth);
  
  return (
    isLoaded && !isEmpty ? children : navigate('/') 
  );
};

export default PrivateRoute;
