import React, { Component } from 'react';
import EventDisplay from './EventDisplay.js'
import axios from 'axios';
import NavBar from './AppBar.js';


class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        eventList: [],
        fetchedChars: false,
        fakeNames: ['van', 'junie', 'ronke', 'storm', 'strom', 'strmo', 'may' ]
      }
    }
// may need to map events
  componentDidMount = () => {
    axios.get('/api/',)
    .then(res => res.data)
    .then((eventList) => {
      console.log(eventList, 'eventList!!!!!!!!!!!!!!!!!!')
      if (!Array.isArray(eventList)) eventList = [];
      return this.setState({
        eventList,
        fetchedChars: true
      });
    })
    .catch(err => console.log('eventList.componentDidMount: get eventList: ERROR: ', err));
  }

    render() {

      return (
        <div>
          <NavBar />
          <EventDisplay
            eventList={this.state.eventList}
            fakeNames={this.state.fakeNames}
          />

        </div>
        )
    }
  }

  export default Main;

