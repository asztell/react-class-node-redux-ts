import { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import Events from "../../components/Events/Events.js";
import Quantity from "../../components/Quantity/Quantity.js";

class EventsPageClass extends Component {
  render() {
    const eventsPageToHomePageClassName = classnames("To_Home", "Left");
    const eventsPageToCheckoutPageClassName = classnames(
      "To_Checkout",
      "Right"
    );

    const { location } = this.props;
    return (
      <div className="Events_Page">
        <div>
          <Events />
          <Quantity />
        </div>
        <Link
          to={`/${location.search}`}
          className={eventsPageToHomePageClassName}
        >
          Home
        </Link>
        <Link
          to={`/checkout${location.search}`}
          className={eventsPageToCheckoutPageClassName}
        >
          Next
        </Link>
      </div>
    );
  }
}

export const EventsPage = (props) => {
  const location = useLocation();
  return <EventsPageClass {...props} location={location} />;
};
