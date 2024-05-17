import { Component } from "react";
import { EventCard } from "../EventCard/EventCard";
import { withSearchParams, getSearchParams } from "../withSearchParams";
import "./Events.scss";

class EventsClass extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events, error, searchParams, setSearchParams } = this.props;
    const { eventId } = getSearchParams(searchParams);
    console.log("setSearchParams", setSearchParams);
    const setSelectedEvent = (eventId) => {
      setSearchParams(
        (searchParams) => {
          searchParams.set("eventId", eventId);
          return searchParams;
        },
        { replace: true }
      );
    };

    return (
      <div className="Events">
        <h2>Events</h2>
        {error && <div>{error}</div>}
        <div>
          <label htmlFor="event-select">Choose an event:</label>
          {events.map((event) => {
            return (
              <EventCard
                key={event.id}
                event={event}
                className="Event-Card"
                isSelected={eventId === event.id}
                onEventSelect={(e) => setSelectedEvent(e)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export const Events = (props) => {
  const defaultParams = {
    eventId: "",
    count: "",
  };
  return withSearchParams(EventsClass, defaultParams)(props);
};
