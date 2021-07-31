import React from 'react';
import Event from './Event.js';
 
 //eventID from eventList
 //user from eventList

 const EventDisplay = props => {
   
   const eachEvent = props.eventList.map((event, i) => {
     return <Event key={i}
       username={event.username}
       favSport={event.favSport}
       description={event.description}
      //  interested={props.interested}
     />;
   });
   return (
     <div className="displayBox" >
       <h4>Events</h4>
       {eachEvent}
     </div>
   );
 };
 
 export default EventDisplay;