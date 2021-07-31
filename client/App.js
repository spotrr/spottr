import React, { Component } from 'react';
import { connect } from 'react-redux';
// import MainContainer from './containers/MainContainer';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Homepage from './components/Homepage.jsx';
import * as actions from './actions/actions';

const mapStateToProps = (state) => ({
  username: state.user.currentUser,
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logInUser: (username) => dispatch(actions.userLoggedInCreator(username)),
  logOutUser: () => dispatch(actions.userLoggedOut()),
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          {/* <Route
            exact
            path='/profile'
            render={() => (
              <Profile
                logInUser={this.props.logInUser}
                username={this.props.username}
              /> */}
            {/* )} */}
          />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//
{
  /* <div className="router">
<main>

<Switch>
  <Route
    exact
    path="/"
    component={ProfileCrap}
  />

  <Route
    exact
    path="/algos"
    component={MainContainer}
  />

</Switch>
</main>
</div> */
}
