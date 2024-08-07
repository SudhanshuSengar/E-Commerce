import React, { Component } from 'react';
import './App.css';
import Navbar from './organism/Navbar/Navbar';
import Homepage from "./pages/Homepage/Homepage"

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Homepage />
      </div>
    );
  }
}

export default App;
