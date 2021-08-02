import React, { Component } from 'react';
import EventDisplay from './EventDisplay.js'
import axios from 'axios';
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
        eventList: [],
        fetchedChars: false,
      }
    }
// may need to map events
  componentDidMount = () => {
    axios.get('/api/',)
    .then(res => res.data)
    .then((eventList) => {
      console.log(eventList, 'eventList!!!!!!!!!!!!!!!!!!')
      if (!Array.isArray(eventList)) eventList = [];
      return this.setState({
        eventList,
        fetchedChars: true
      });
    })
    .catch(err => console.log('eventList.componentDidMount: get eventList: ERROR: ', err));
  }

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
  