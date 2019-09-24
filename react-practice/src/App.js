import React from "react";
import "./App.css";
import Hook from "./hook";

class App extends React.Component {
  state = {
    name: "test"
  };
  render() {
    return <Hook appName={this.state.name} />;
  }
}

export default App;
