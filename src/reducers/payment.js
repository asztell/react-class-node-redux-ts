import {
  UPDATE_NAME_ON_CARD,
  UPDATE_CARD_NUMBER,
  UPDATE_SECURITY_CODE,
  UPDATE_EXPIRATION_DATE,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE,
} from "../actions";

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
      // TODO: update confirmation success
      return state;
    case PLACE_ORDER_FAILURE:
      // TODO: update confirmation failure
      return state;
    default:
      return state;
  }
}

export function validateCardNumber(cardNumber) {
  const isValid = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber),
    mastercard:
      /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/.test(
        cardNumber
      ),
    amex: /^3[47][0-9]{13}$/.test(cardNumber),
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/.test(cardNumber),
    dinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(cardNumber),
  };

  if (isValid.visa) {
    return "visa";
  } else if (isValid.mastercard) {
    return "mastercard";
  } else if (isValid.amex) {
    return "amex";
  } else if (isValid.discover) {
    return "discover";
  } else if (isValid.dinersClub) {
    return "dinersClub";
  } else {
    return "unknown";
  }
}

export function validateSecurityCode(cardType, securityCode) {
  if (cardType === "amex") {
    return /^[0-9]{4}$/.test(securityCode);
  } else {
    return /^[0-9]{3}$/.test(securityCode);
  }
}

export function validateExpirationDate(expirationDate) {
  return (
    /^([0-9]{4})-(0[1-9]|1[0-2])$/.test(expirationDate) &&
    new Date(expirationDate) > new Date()
  );
}
