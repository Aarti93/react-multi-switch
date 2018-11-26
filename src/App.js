import React, { Component } from 'react';
import MultiSwitch from "./MultiSwitch";
import './App.css';
// Props : number of parts, theme (array of colors for each part), array of text for each part, default,  
class App extends Component {
  render() {
    const parts = ["Yes", "No", "Maybe"];
    return (
      <div className="App">
        <MultiSwitch parts={parts} default={parts[1]}/>
      </div>
    );
  }
}

export default App;
