import { connect } from "react-redux";
import {
  updateNameOnCard,
  updateCardNumber,
  updateSecurityCode,
  updateExpirationDate,
} from "../../store/actions";
import { Billing } from "./Billing.jsx";

const mapStateToProps = (state) => {
  console.log(state.payment);
  const {
    nameOnCard,
    cardNumber,
    cardType,
    cardNumberValid,
    securityCode,
    securityCodeValid,
    expirationDate,
    expirationDateValid,
  } = state.payment;
  return {
    nameOnCard,
    cardNumber,
    cardType,
    cardNumberValid,
    securityCode,
    securityCodeValid,
    expirationDate,
    expirationDateValid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNameOnCard: (nameOnCard) => dispatch(updateNameOnCard(nameOnCard)),
    updateCardNumber: (cardNumber) => dispatch(updateCardNumber(cardNumber)),
    updateSecurityCode: (securityCode) =>
      dispatch(updateSecurityCode(securityCode)),
    updateExpirationDate: (expirationDate) =>
      dispatch(updateExpirationDate(expirationDate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Billing);
