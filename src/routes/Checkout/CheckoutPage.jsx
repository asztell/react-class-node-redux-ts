import { Component } from "react";
import Billing from "../../components/Billing/Billing.js";
import { SummaryContainer } from "../../components/Summary/Summary.js";
import "./CheckoutPage.scss";

export default class CheckoutPage extends Component {
  render() {
    return (
      <>
        <div className="Checkout-Page">
          <Billing className="Billing" />
          <SummaryContainer className="SummaryContainer" />
        </div>
      </>
    );
  }
}
