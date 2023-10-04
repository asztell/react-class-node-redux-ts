import { connect } from "react-redux";
import { getEvents } from "../../store/actions";
import { setSelectedEvent } from "../../store/actions/ticketPurchasing";
import { Events } from "./Events.jsx";

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
