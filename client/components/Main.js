import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../constants/actionTypes';
import EventDisplay from './EventDisplay.js';
import EventCreator from './EventCreator.js';
import axios from 'axios';

const Main = () => {
  const [toggleCreator, setToggle] = useState(true);
  return (
    <div>
      <button onClick={() => setToggle(!toggleCreator)}>
        {' '}
        {toggleCreator ? 'Add Event' : 'Back to Events'}
      </button>
      {toggleCreator ? (
        <EventDisplay />
      ) : (
        <EventCreator setToggle={setToggle} />
      )}
    </div>
  );
};
// may need to map events

export default Main;

// axios.get('/api/',)
// .then(res => res.data)
// .then((eventList) => {
//   console.log(eventList, 'eventList!!!!!!!!!!!!!!!!!!')
//   if (!Array.isArray(eventList)) eventList = [];
//   return this.setState({
//     eventList,
//     fetchedChars: true
//   });
// })
// .catch(err => console.log('eventList.componentDidMount: get eventList: ERROR: ', err));
