import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../constants/actionTypes';
import EventDisplay from './EventDisplay.js';
import EventCreator from './EventCreator.js';
import axios from 'axios';
import NavBar from './AppBar.js';


const Main = () => {
  const [toggleCreator, setToggle] = useState(true);
  return (
    <div>
      <NavBar />
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