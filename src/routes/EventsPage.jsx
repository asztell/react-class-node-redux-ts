import { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Events, Quantity } from "../components";

export default class EventsPage extends Component {
  render() {
    const eventsPageToHomePageClassName = classnames(
      "Events-Page-To-Home-Page",
      "Left-Link-Button"
    );
    const eventsPageToCheckoutPageClassName = classnames(
      "Events-Page-To-Checkout-Page",
      "Right-Link-Button"
    );

    return (
      <div className="Events-Page">
        <div>
          <Events />
          <Quantity />
        </div>
        <Link to="/" className={eventsPageToHomePageClassName}>
          Home
        </Link>
        <Link to="/checkout" className={eventsPageToCheckoutPageClassName}>
          Next
        </Link>
      </div>
    );
  }
}
