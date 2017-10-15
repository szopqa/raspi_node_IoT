import React, { Component } from 'react';
import logo from '../../logo.svg';

import Switch from '../switches/Switch.jsx'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Raspi Controller</h1>
        </header>
          <Switch
              header = 'Red Led switch'
              pinNumber = {7}
          />
          <Switch
              header = 'Yellow Led switch'
              pinNumber = {24}
          />
      </div>
    );
  }
}

export default App;
