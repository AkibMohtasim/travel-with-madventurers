import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { logOut, signInUsingGoogle, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_uri = location.state?.from || '/home';


  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then(result => {
        console.log(result.user);
        navigate(redirect_uri);
      })
  }
  console.log(user)
  return (
    <div>
      <h2>Please Login</h2>

      <button onClick={handleGoogleSignIn}> Google Sign In</button>
      <br />
      <button onClick={logOut}>Log Out</button>

      <p>{user?.displayName}</p>

    </div>
  );
};

export default Login;