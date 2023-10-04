import { connect } from "react-redux";
import { placeOrder } from "../../store/actions";
import { Summary } from "./Summary.jsx";

const mapStateToProps = (state) => {
  const {
    nameOnCard,
    cardNumber,
    securityCode,
    cardType,
    securityCodeValid,
    expirationDateValid,
  } = state.payment;
  const { ticketsCount, selectedEvent } = state.ticketPurchasing;
  return {
    ticketsCount,
    selectedEvent,
    nameOnCard,
    cardNumber,
    cardType,
    securityCode,
    securityCodeValid,
    expirationDateValid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (orderDetails) => dispatch(placeOrder(orderDetails)),
  };
};

const SummaryContainer = connect(mapStateToProps, mapDispatchToProps)(Summary);
export { SummaryContainer };
