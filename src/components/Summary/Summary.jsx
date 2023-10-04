import { Component } from "react";
import { useSearchParams } from "react-router-dom";
import "./Summary.scss";

class SummaryClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termsOfUseChecked: false,
    };
    this.onChangeTermsOfUse = this.onChangeTermsOfUse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeTermsOfUse() {
    this.setState({
      termsOfUseChecked: !this.state.termsOfUseChecked,
    });
  }

  handleSubmit() {
    const {
      selectedEvent,
      ticketsCount,
      nameOnCard,
      cardNumber,
      cardType,
      securityCode,
      onSubmit,
    } = this.props;

    onSubmit({
      selectedEvent,
      ticketsCount,
      nameOnCard,
      cardNumber,
      cardType,
      securityCode,
    });
  }

  render() {
    const { state, props, onChangeTermsOfUse, handleSubmit } = this;
    const { termsOfUseChecked } = state;
    const {
      className,
      selectedEvent,
      ticketsCount,
      nameOnCard,
      cardNumber,
      cardType,
      securityCode,
      securityCodeValid,
      expirationDateValid,
    } = props;

    return (
      <div className={className}>
        <div className="Total">
          <h2>Total</h2>
          <p>Event: {selectedEvent?.name}</p>
          <p>Tickets: {ticketsCount}</p>
          <p>Card Number: {cardNumber}</p>
          <p>Name: {nameOnCard}</p>
          <p>Security Code: {securityCode}</p>
          <input
            type="checkbox"
            onChange={onChangeTermsOfUse}
            checked={termsOfUseChecked}
            name="termsOfUseChecked"
          />
          <label htmlFor="termsOfUse">
            I have read and agree to the current{" "}
            <a href="https://www.google.com">Terms of Use</a>
          </label>
          <button
            className="Purchase-Tickets-Button"
            onClick={handleSubmit}
            disabled={
              cardType === "" ||
              cardType === "Invalid" ||
              !securityCodeValid ||
              !expirationDateValid ||
              !termsOfUseChecked ||
              ticketsCount === 0
            }
          >
            Place Order
          </button>
        </div>
      </div>
    );
  }
}

export const Summary = (props) => {
  const [searchParams] = useSearchParams();
  return <SummaryClass {...props} searchParams={searchParams} />;
};
