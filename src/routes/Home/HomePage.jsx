import { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HomePage.scss";

class HomePageClass extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="Home Page">
        <Link to={`/events${location.search}`} className="Events-Link">
          Check out Events in your area
        </Link>
      </div>
    );
  }
}

export const HomePage = (props) => {
  const location = useLocation();
  return <HomePageClass {...props} location={location} />;
};
