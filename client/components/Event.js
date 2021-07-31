import React from 'react';

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
  return (
    <div className="eventBox" >
      <p><b>username:</b> {props.username}</p>
      <p><b>favSport:</b> {props.favSport}</p>
      <p><b>description:</b> {props.description}</p>
      
      {/* <button onClick={interested} userID={props.userID} eventID={props.userID}>interested</button> */}
      {/* <button onClick={del} id={props.userId}>Delete </button> */}
    </div>
  );
};

export default Event;