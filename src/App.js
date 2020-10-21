import React, { Component } from "react";
import DisplayData from "./components/DisplayData";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <DisplayData />
      </main>
    );
  }
}

export default App;
