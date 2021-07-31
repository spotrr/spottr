import React, { Component } from 'react';
import EventDisplay from './EventDisplay.js'
// import { connect } from 'react-redux';
// import * as actions from '../actions/actions';

// const mapStateToProps = (state) => ({
//     username: state.user.currentUser,
//     loggedIn: state.user.loggedIn,
//   });
  
//   const mapDispatchToProps = (dispatch) => ({
//     logInUser: (username) => dispatch(actions.userLoggedInCreator(username)),
//     logOutUser: () => dispatch(actions.userLoggedOut()),
//   });

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        eventList: [
            {
                username: 'Calvin Cambridge',
                favSport: 'Basketball',
                description: `it's my favorite sport. 
                    I like to dribble up and down the court`,
            },
            {
                username: 'Storm',
                favSport: 'Leggos',
                description: `when it storms, it rains. lol`,
            }
        ],
        
      }
    }
// may need to map events

    render() {

      return (
          
        <div>
        
          <EventDisplay 
            eventList={this.state.eventList}
          />

        </div> 
        )
    }
  }
  
  export default Main;
//   connect(mapStateToProps, mapDispatchToProps)
  