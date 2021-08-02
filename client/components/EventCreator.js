import React, { Component } from 'react';
import axios from 'axios';

//userID

class EventCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      
    }
  }
// may need to map events
handleSubmit = (event) => {
  event.preventDefault();
  axios.post('/create', {
    typeofEvent: event.target.typeofEvent.value,
    // date: event.target.date.value,
    description: event.target.description.value,
  })
  .then((res) => console.log(res))
  .catch((err) => err)
}

  render() {

    return (
      // <h1>hi mom in eventcreator</h1>
      <div className="eventCreator" >
          <form onSubmit={this.handleSubmit} method="post" action="/create" >
              <select name="typeofEvent">
                  <option value="gym">gym</option>
                  <option value="running">running</option>
                  <option value="cycling">cycling</option>
                  <option value="yoga">yoga</option>
              </select>
              <input type='date'></input>
              <input name='description' type='textarea' name="description"></input>
              <button>Submit baby</button>
          </form>
      </div>
    );   
  }
}

export default EventCreator;



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


  
  // export default Main;