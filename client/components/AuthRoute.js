import React from 'react';
import { Redirect, Route } from 'react-router';

const AuthRoute = (props) => {
  if (isLoggedIn === 'true') return <Redirect to='/main' />;
  else if (type === 'private' && !isAuthUser) return <Redirect to='/' />;

  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser,
});
