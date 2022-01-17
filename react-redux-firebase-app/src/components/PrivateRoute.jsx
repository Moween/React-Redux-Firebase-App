import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { isLoaded, isEmpty } = useSelector((state) => state.firebase.auth);

  return isLoaded && !isEmpty ? children : <Navigate to='/' />;
};

export default PrivateRoute;
