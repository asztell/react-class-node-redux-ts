import { Component } from "react";
import "./Billing.scss";

export class Billing extends Component {
  constructor(props) {
    super(props);
    this.handleNameOnCardChange = this.handleNameOnCardChange.bind(this);
    this.handleCardNumberChange = this.handleCardNumberChange.bind(this);
    this.handleSecurityCodeChange = this.handleSecurityCodeChange.bind(this);
    this.handleExpirationDateChange =
      this.handleExpirationDateChange.bind(this);
  }

  handleNameOnCardChange(event) {
    const { updateNameOnCard } = this.props;
    updateNameOnCard(event.target.value);
  }
  handleCardNumberChange(event) {
    const { updateCardNumber } = this.props;
    updateCardNumber(event.target.value);
  }
  handleSecurityCodeChange(event) {
    const { updateSecurityCode } = this.props;
    updateSecurityCode(event.target.value);
  }
  handleExpirationDateChange(event) {
    const { updateExpirationDate } = this.props;
    updateExpirationDate(event.target.value);
  }

  render() {
    const {
      className,
      cardNumber,
      cardType,
      cardNumberValid,
      expirationDate,
      securityCode,
      securityCodeValid,
      nameOnCard,
      expirationDateValid,
    } = this.props;

    return (
      <div className={className}>
        {/* TODO: each Billing entry can be extracted into its own component */}
        <div className="Delivery">
          <h2 className="Section-Header">Delivery</h2>
          <h3>Some text</h3>
          <p>
            This is some description that will be displayed on the page. It
            needs to be long enough to wrap to the next line.
          </p>
        </div>
        <div className="Payment">
          <h2 className="Section-Header">Payment</h2>
          <div data-tid="accepted-cards" className="Accepted-Cards">
            <div
              aria-label="american-express"
              role="img"
              className="Amex"
            ></div>
            <div aria-label="visa" role="img" className="Visa"></div>
            <div
              aria-label="master-card"
              role="img"
              className="Master-Card"
            ></div>
            <div
              // logo="discover"
              aria-label="discover"
              role="img"
              className="Discover"
            ></div>
            <div
              aria-label="diners-club"
              role="img"
              className="Diners-Club"
            ></div>
          </div>
          {/* TODO: the payment sections can be extracted into a PaymentSection component */}
          <div className="Payment-Section">
            <label htmlFor="name-on-card" className="Payment-Form-Label">
              Name on Card
            </label>
            <input
              type="text"
              onChange={this.handleNameOnCardChange}
              className="nameOnCard"
              // onBlur={handleCardNumberBlur}
              value={nameOnCard}
            />
          </div>
          <div className="Payment-Section">
            <label htmlFor="card-number" className="Payment-Form-Label">
              Card Number
            </label>
            <input
              type="text"
              onChange={this.handleCardNumberChange}
              //   onBlur={handleCardNumberBlur}
              className="cardNumber"
              value={cardNumber}
            />
            <div className="Payment-Validation-Error">{cardType}</div>
            <div className="Payment-Validation-Error">{`valid: ${cardNumberValid}`}</div>
          </div>
          <div className="Payment-Section Expiration-Date-And-Security-Code">
            <div className="Expiration-Date">
              <label className="Payment-Form-Label">Expiration Date</label>
              <input
                type="month"
                onChange={this.handleExpirationDateChange}
                // onBlur={handleExpirationDateBlur}
                className="expirationDate"
                value={expirationDate}
                maxLength={8}
              />
              <div>{`valid: ${expirationDateValid}`}</div>
            </div>
            <div className="Security-Code">
              <label className="Payment-Form-Label">Security Code</label>
              <input
                type="text"
                onChange={this.handleSecurityCodeChange}
                // onBlur={handleSecurityCodeBlur}
                className="securityCode"
                value={securityCode !== null ? securityCode : ""}
                maxLength={4}
              />
              <div>{`valid: ${securityCodeValid}`}</div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="Ticket-Insurance">
          <h2 className="Section-Header">Ticket Insurance</h2>
          <p>
            Get reimbursed up to 100% with Event Ticket Insurance for only
            $28.00 per ticket ($56.00 total). *Offer not available after
            purchase is finalized.
          </p>
        </div>
      </div>
    );
  }
}
