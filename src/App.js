import React, { Component } from 'react';
// import logo from './logo.svg';
import Calculator from './Calculator.js';
import './App.css';

//What is the state?
//What to do when it changes
class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Calculator />
      </div>
    );
  }
}

export default App;
