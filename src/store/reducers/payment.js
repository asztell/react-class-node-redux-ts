import {
  UPDATE_NAME_ON_CARD,
  UPDATE_CARD_NUMBER,
  UPDATE_SECURITY_CODE,
  UPDATE_EXPIRATION_DATE,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE,
} from "../actions";
import {
  validateCardNumber,
  validateSecurityCode,
  validateExpirationDate,
} from "../../utils/validations";

const initialState = {
  nameOnCard: "",
  cardNumber: "",
  cardType: "",
  cardNumberValid: false,
  securityCode: "",
  securityCodeValid: false,
  expirationDate: "",
  expirationDateValid: false,
};

export function payment(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME_ON_CARD:
      const nameOnCard = action.nameOnCard;
      if (nameOnCard !== state.nameOnCard) {
        return {
          ...state,
          nameOnCard,
        };
      }
      return state;
    case UPDATE_CARD_NUMBER:
      const cardNumber = action.cardNumber;
      if (cardNumber !== state.cardNumber) {
        const cardType = validateCardNumber(cardNumber);
        return {
          ...state,
          cardNumber,
          cardType,
          cardNumberValid: cardType !== "unknown",
        };
      }
      return state;
    case UPDATE_SECURITY_CODE:
      const securityCode = action.securityCode;
      if (securityCode !== state.securityCode) {
        return {
          ...state,
          securityCode: securityCode,
          securityCodeValid: validateSecurityCode(state.cardType, securityCode),
        };
      }
      return state;
    case UPDATE_EXPIRATION_DATE:
      const expirationDate = action.expirationDate;
      if (expirationDate !== state.expirationDate) {
        return {
          ...state,
          expirationDate,
          expirationDateValid: validateExpirationDate(expirationDate),
        };
      }
      return state;
    case PLACE_ORDER_SUCCESS:
      console.log("PLACE_ORDER_SUCCESS");
      // TODO: update confirmation success
      return state;
    case PLACE_ORDER_FAILURE:
      console.error("PLACE_ORDER_FAILURE");
      // TODO: update confirmation failure
      return state;
    default:
      return state;
  }
}
