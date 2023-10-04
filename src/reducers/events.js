import { GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from "../actions";

const initialState = {
  events: [],
  error: null,
};

export function events(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.events,
      };
    case GET_EVENTS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
