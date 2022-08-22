import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if(isLoading){
    return <CircularProgress color="inherit" />
  }

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }

};

export default PrivateRoute;