import React from 'react';

//userID


const EventCreator = () => {

  return (
    // <h1>hi mom in eventcreator</h1>
    <div className="eventCreator" >
        <form>
            <select name="typeofEvent">
                <option value="gym">gym</option>
                <option value="running">running</option>
                <option value="cycling">cycling</option>
                <option value="yoga">yoga</option>
            </select>
            <input type='date'></input>
            <input name='description' type='textarea'></input>
            <button>Submit baby</button>
        </form>
    </div>
  );
};

export default EventCreator;