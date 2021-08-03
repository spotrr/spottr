import React, { useState, useEffect } from 'react';
import Event from './Event.js';

import axios from 'axios';

//eventID from eventList
//user from eventList
//TODOS
//need to grab
const EventDisplay = (props) => {
  const [eventList, setEventList] = useState([]);
  useEffect(() => fetchEvents(), []);
  const fetchEvents = async () => {
    const res = await axios.get('/api/');
    let tempList = res.data;
    console.log(tempList, 'eventList!!!!!!!!!!!!!!!!!!');
    if (!Array.isArray(eventList)) tempList = [];
    else setEventList(tempList);
  };


  const eachEvent = eventList.map((event, i) => {
    return (
      <Event
        key={i}
        //THIS IS THE USER WHO CREATED THE EVENT. CHANGE THIS TO THE ACTUAL USER NAME THAT WE GET FORM THE STATE.
        username={event.username}
        typeofEvent={event.typeofEvent}
        eventID={event._id}
        description={event.description}
        likes={event.likes}
      />
    );
  });
  return (
    <div className='displayBox'>
      <img id="icon1" src="../images/logo.png" alt=""/>
      {eachEvent}
    </div>
  );
};


export default EventDisplay;