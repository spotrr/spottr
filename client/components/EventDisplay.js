import React from 'react';
import Event from './Event.js';

 //eventID from eventList
 //user from eventList
//TODOS
  //need to grab
 const EventDisplay = props => {



   const eachEvent = props.eventList.map((event, i) => {
     return <Event key={i}
      //THIS IS THE USER WHO CREATED THE EVENT. CHANGE THIS TO THE ACTUAL USER NAME THAT WE GET FORM THE STATE.
       fakeName={props.fakeNames[i]}
       typeofEvent={event.typeofEvent}
       eventID={event._id}
       description={event.description}
       likes={event.likes}
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