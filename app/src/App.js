import React, { Component } from "react";

import NavBar from "./components/NavBar";
import Router from "./components/Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router />
      </div>
    );
  }
}

export default App;
