import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

const AuthRoute = (props) => {
  const isNewUser = useSelector((state) => state.user.isNewUser);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  if (!loggedIn) return <Redirect to='/' />;
  else if (isNewUser) return <Redirect to='/api/google/auth' />;

  return <Route {...props} />;
};

export default AuthRoute;
