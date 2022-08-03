import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }

};

export default PrivateRoute;