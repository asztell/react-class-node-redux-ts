import { Component } from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-Header"></header>
        <div className="App-Content">
          <Outlet />
        </div>
      </div>
    );
  }
}
