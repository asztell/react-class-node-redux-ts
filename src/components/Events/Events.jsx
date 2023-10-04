import { Component } from "react";
import { useSearchParams } from "react-router-dom";
import { EventCard } from "../EventCard/EventCard";
import "./Events.scss";

class EventsClass extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events, error, selectedEvent, setSelectedEvent } = this.props;

    return (
      <div className="Events">
        <h2>Events</h2>
        {error && <div>{error}</div>}
        <div>
          <label htmlFor="event-select">Choose an event:</label>
          {events.map((event) => {
            // console.log("event.id", event?.id);
            // console.log("selectedEvent.id", selectedEvent?.id);
            return (
              <EventCard
                key={event.name + event.ISODate}
                event={event}
                isSelected={selectedEvent?.id === event?.id}
                selectedEvent={selectedEvent}
                onEventSelect={setSelectedEvent}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export const Events = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <EventsClass
      {...props}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
    />
  );
};
