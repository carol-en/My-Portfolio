import React, { Component } from 'react';
import './App.css';
import CanvasReact from "./components/CanvasReact.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CanvasReact />
      </div>
    )
  }
}

export default App;
