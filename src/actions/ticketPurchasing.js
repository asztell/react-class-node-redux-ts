export const SET_SELECTED_EVENT = "SET_SELECTED_EVENT";
export function setSelectedEvent(selectedEvent) {
  return {
    type: SET_SELECTED_EVENT,
    selectedEvent,
  };
}

export const SET_TICKETS_COUNT = "SET_TICKETS_COUNT";
export function setTicketsCount(ticketsCount) {
  return {
    type: SET_TICKETS_COUNT,
    ticketsCount,
  };
}

export const SET_CARD_INFO = "SET_CARD_INFO";
export function setCardInfo(cardInfo) {
  return {
    type: SET_CARD_INFO,
    cardInfo,
  };
}

export const SET_TERMS_OF_USE_CHECKED = "SET_TERMS_OF_USE_CHECKED";
export function setTermsOfUseChecked(termsOfUseChecked) {
  return {
    type: SET_TERMS_OF_USE_CHECKED,
    termsOfUseChecked,
  };
}
