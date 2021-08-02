import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import Profile from './components/Profile';
import Main from './components/Main';
import EventCreator from './components/EventCreator';
import Homepage from './components/Homepage.jsx';
import SignUpForm from './components/SignUpForm.jsx';
const App = (props) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isNewUser = useSelector((state) => state.user.isNewUser);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  if (isNewUser) {
    return <SignUpForm />;
  } else if (!loggedIn) return <Homepage />;
  else {
    return (
      <div>
        <Switch>
          <Route exact path='/main' render={() => <Main />} />
          <Route exact path='/create' render={() => <EventCreator />} />
        </Switch>
      </div>
    );
  }
};

export default App;
