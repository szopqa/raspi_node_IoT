import React, { Component } from 'react';

import Header from '../header/Header';
import PinSwitches from '../switch/PinSwitches';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PinSwitches/>
      </div>
    );
  }
}

export default App;
