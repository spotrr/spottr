import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
//interested
//userID
//eventID

const Event = (props) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleLike = (eventID, username) => {
    //PASS IN THE USER WHO LIKED THIS EVENT. GET THIS FROM STATE. CHANGE THIS IN HANDLIKE IN THE BUTOTN AS WELL
    console.log(eventID, username);
    axios
      .post('/api/', {
        id: eventID,
        username: username,
      })
      .then((res) => console.log('res in events.js'))
      .catch((err) => err);
  };

  const handleDelete = (id) => {
    axios.delete('/api/delete', { id: id }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    //  console.log(eventID, username)
    //   axios.post('/api/', {
    //     id: eventID,
    //     username: username
    //   })
    //   .then((res) => console.log('res in events.js'))
    //   .catch((err) => err)
  };

  return (
    <div className='eventBox'>
      <p>
        <b>username:</b> {props.username}
      </p>
      <p>
        <b>type of event:</b> {props.typeofEvent}
      </p>
      {/* <p><b>favSport:</b> {props.eventID}</p> */}
      <p>
        <b>description:</b> {props.description}
      </p>
      {/* userID={props.userID} eventID={props.eventID} */}
      <p>
        <b>likes:</b> {props.likes.length}
      </p>
      <button onClick={() => handleLike(props.eventID, currentUser)}>
        interested
      </button>
      <button onClick={() => handleDelete(props.eventID)}>Delete</button>
    </div>
  );
};

export default Event;
