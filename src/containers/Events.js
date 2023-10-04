import { connect } from "react-redux";
import { getEvents } from "../actions";
import { setSelectedEvent } from "../actions/ticketPurchasing";
import { Events } from "../components";

const mapStateToProps = (state) => {
  const { events, error } = state.events;
  const { selectedEvent } = state.ticketPurchasing;
  return {
    events,
    error,
    selectedEvent,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: () => dispatch(getEvents()),
    setSelectedEvent: (event) => dispatch(setSelectedEvent(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
