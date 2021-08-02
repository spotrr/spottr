import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import Profile from './components/Profile';
import Main from './components/Main';
import EventCreator from './components/EventCreator';
import Homepage from './components/Homepage.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import AuthRoute from './components/AuthRoute';
import './stylesheets/styles.scss';

const App = (props) => {
  const isNewUser = useSelector((state) => state.user.isNewUser);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  if (loggedIn) return <Main />;
  else if (isNewUser) return <SignUpForm />;
  else return <Homepage />;
};
//butts
export default App;
