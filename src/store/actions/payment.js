export const UPDATE_NAME_ON_CARD = "UPDATE_NAME_ON_CARD";
export function updateNameOnCard(nameOnCard) {
  return {
    type: UPDATE_NAME_ON_CARD,
    nameOnCard,
  };
}

export const UPDATE_CARD_NUMBER = "UPDATE_CARD_NUMBER";
export function updateCardNumber(cardNumber) {
  return {
    type: UPDATE_CARD_NUMBER,
    cardNumber,
  };
}

export const UPDATE_SECURITY_CODE = "UPDATE_SECURITY_CODE";
export function updateSecurityCode(securityCode) {
  return {
    type: UPDATE_SECURITY_CODE,
    securityCode,
  };
}

export const UPDATE_EXPIRATION_DATE = "UPDATE_EXPIRATION_DATE";
export function updateExpirationDate(expirationDate) {
  return {
    type: UPDATE_EXPIRATION_DATE,
    expirationDate,
  };
}

export const PLACE_ORDER = "PLACE_ORDER";
export function placeOrder() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8080/placeOrder");
      if (!response.ok) {
        throw response;
      }
      const jsonResponse = await response.json();
      dispatch(placeOrderSuccess(jsonResponse));
    } catch (error) {
      dispatch(placeOrderFailure(error));
    }
  };
}

export const PLACE_ORDER_SUCCESS = "PLACE_ORDER_SUCCESS";
export function placeOrderSuccess(placeOrderSuccessResponse) {
  return {
    type: PLACE_ORDER_SUCCESS,
    placeOrderSuccessResponse,
  };
}

export const PLACE_ORDER_FAILURE = "PLACE_ORDER_FAILURE";
export function placeOrderFailure(placeOrderFailureResponse) {
  return {
    type: PLACE_ORDER_FAILURE,
    placeOrderFailureResponse,
  };
}
