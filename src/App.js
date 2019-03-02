import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import AddTask from "./components/AddTask";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <AddTask />
      </div>
    );
  }
}

export default App;
