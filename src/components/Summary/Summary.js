import { connect } from "react-redux";
import { placeOrder } from "../../store/actions";
import { Summary } from "./Summary.jsx";

const mapStateToProps = (state) => {
  const { ticketsCount, selectedEvent } = state.ticketPurchasing;
  const { events } = state.events;
  const {
    nameOnCard,
    cardNumber,
    securityCode,
    cardType,
    securityCodeValid,
    expirationDateValid,
  } = state.payment;
  return {
    ticketsCount,
    selectedEvent,
    events,
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
