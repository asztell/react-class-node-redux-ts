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
