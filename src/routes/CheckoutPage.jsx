import { Component } from "react";
// import { Link } from "react-router-dom";
import { Billing } from "../containers";
import { Summary } from "../containers";
import "./CheckoutPage.scss";

export default class CheckoutPage extends Component {
  render() {
    return (
      <>
        <div className="Checkout-Page">
          <Billing className="Billing" />
          <Summary className="Summary" />
        </div>
        {/* <NavigationContainer>
          <LinkButton
            to="/events"
            label="Events"
            className={checkoutToEventsClassName}
          />
          <LinkButton
            to="/"
            label="Home"
            className={checkoutToHomePageClassName}
          />
        </NavigationContainer> */}
      </>
    );
  }
}
