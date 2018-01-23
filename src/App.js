import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotel and Restaurant Finder</h1>
        </header>
        <div className="App-intro">

        <label className="SearchBox">
            <input value="Search for a hotel or restaurant"></input>
        </label>
        </div>
      </div>
    );
  }
}

export default App;
