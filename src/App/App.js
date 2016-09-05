import React, { Component } from 'react';
import Content from '../Content/Content'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var num = 0;

    function cool() {
      num++;
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-content">
          <Content id={num} />
          <button onClick={cool()}></button>
        </div>
      </div>
    );
  }
}

export default App;
