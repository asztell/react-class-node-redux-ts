export function getEvents() {
  return async (dispatch) => {
    //   return async (dispatch, getState) => {
    //     console.log("getState", getState());
    try {
      const response = await fetch("http://localhost:8080/events");
      if (!response.ok) {
        throw response;
      }
      const events = await response.json();
      dispatch(getEventsSuccess(events));
    } catch (error) {
      dispatch(getEventsFailure(error));
    }
  };
}

export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";
export function getEventsSuccess(events) {
  return {
    type: GET_EVENTS_SUCCESS,
    events,
  };
}

export const GET_EVENTS_FAILURE = "GET_EVENTS_FAILURE";
export function getEventsFailure(error) {
  return {
    type: GET_EVENTS_FAILURE,
    error,
  };
}
