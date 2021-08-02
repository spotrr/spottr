import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../constants/actionTypes';
import axios from 'axios';

//userID

const EventCreator = (props) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  // may need to map events
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/create', {
        //add username here of the current user
        username: currentUser,
        typeofEvent: event.target.typeofEvent.value,
        // date: event.target.date.value,
        description: event.target.description.value,
      })
      .then((res) => {
        console.log(res);
        props.setToggle(true);
      })
      .catch((err) => err);
  };

  return (
    <div className='eventCreator'>
      <form onSubmit={handleSubmit} method='post' action='/create'>
        <select name='typeofEvent'>
          <option value='gym'>gym</option>
          <option value='running'>running</option>
          <option value='cycling'>cycling</option>
          <option value='yoga'>yoga</option>
        </select>
        <input type='date'></input>
        <input name='description' type='textarea' name='description'></input>
        <button>Submit baby</button>
      </form>
    </div>
  );
};

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
