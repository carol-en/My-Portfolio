import React, {Component} from 'react';
import './App.css';
import Bookmarks from "./components/Bookmarks.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Bookmarks />
      </div>
    )
  }
}

export default App;
