import { connect } from "react-redux";
import { placeOrder } from "../actions";
// import { withSearchParams } from "../components";
import { Summary } from "../components";

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  // export default withSearchParams(connect(mapStateToProps, mapDispatchToProps))(
  Summary
);
