import React from 'react';
import axios from 'axios'
//interested
//userID
//eventID

const Event = props => {
//   function placeholder() {
//     const id = props.marketId;
//     return props.placeholder(id);
//   }
//   function placeholder() {
//     const id = props.marketId;
//     return props.placeholder(id);
//   }
const handleLike = (eventID, username) => {
  //PASS IN THE USER WHO LIKED THIS EVENT. GET THIS FROM STATE. CHANGE THIS IN HANDLIKE IN THE BUTOTN AS WELL
 console.log(eventID, username)
  axios.post('/api/', {
    id: eventID,
    username: username
  })
  .then((res) => console.log('res in events.js'))
  .catch((err) => err)
}


  return (
    <div className="eventBox" >
      <p><b>username:</b> {props.fakeName}</p>
      <p><b>type of event:</b> {props.typeofEvent}</p>
      {/* <p><b>favSport:</b> {props.eventID}</p> */}
      <p><b>description:</b> {props.description}</p>
      {/* userID={props.userID} eventID={props.eventID} */}
      <p><b>likes:</b> {props.likes}</p>
      <button onClick={() => handleLike(props.eventID, props.fakeName)} >interested</button>
      {/* <button onClick={del} id={props.userId}>Delete </button> */}
    </div>
  );
};

export default Event;