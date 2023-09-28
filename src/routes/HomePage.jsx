import { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="Home Page">
        <Link to="/events" className="Events-Link-Button">
          Check out Events in your area
        </Link>
      </div>
    );
  }
}
