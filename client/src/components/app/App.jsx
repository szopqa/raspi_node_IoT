import React, { Component } from 'react';

import Header from '../header/Header.jsx';
import MainPage from '../pages/MainPage.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainPage/>
      </div>
    );
  }
}

export default App;
