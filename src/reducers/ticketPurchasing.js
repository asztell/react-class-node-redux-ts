import {
  SET_SELECTED_EVENT,
  SET_TICKETS_COUNT,
} from "../actions/ticketPurchasing";

const initialState = {
  selectedEvent: null,
  ticketsCount: 0,
};

export default function ticketPurchasing(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_EVENT:
      if (
        state.selectedEvent === null ||
        action.selectedEvent === null ||
        action.selectedEvent?.id !== state.selectedEvent?.id
      ) {
        return {
          ...state,
          selectedEvent: action.selectedEvent,
        };
      }
      return state;
    case SET_TICKETS_COUNT:
      if (action.ticketsCount !== state.ticketsCount) {
        return {
          ...state,
          ticketsCount: action.ticketsCount,
        };
      }
      return state;
    default:
      return state;
  }
}
