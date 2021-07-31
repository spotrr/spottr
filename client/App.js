import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Profile from './components/Profile';
import Main from './components/Main'
import EventCreator from './components/EventCreator';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

        <Switch>

          <Route
            exact path="/main"
            render={() => <Main />}

          />

          <Route
            exact path="/create"
            render={() => <EventCreator/>}

          />

        </Switch>


      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

