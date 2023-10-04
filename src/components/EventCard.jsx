import { Component } from "react";
import classnames from "classnames";
import "./EventCard.scss";

export class EventCard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    const { event, onEventSelect } = this.props;
    onEventSelect(event);
  };

  render() {
    const { event, isSelected, className } = this.props;
    const { ISODate, name, price, location } = event;

    const formattedDate = new Date(ISODate).toLocaleDateString();
    const formattedTime = new Date(ISODate).toLocaleTimeString();
    const formattedDayOfWeek = new Date(ISODate).toLocaleDateString("en-US", {
      weekday: "long",
    });
    const date = `${formattedDayOfWeek}, ${formattedDate} at ${formattedTime}`;

    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

    const cardClassName = classnames(
      "Event-Card",
      { Selected: isSelected },
      className
    );

    return (
      <div onClick={this.onClick} className={cardClassName}>
        <div className="Event-Name">{name}</div>
        <div className="Event-Date">{date}</div>
        <div className="Event-Location">{location}</div>
        <div className="Event-Price">{formattedPrice}</div>
      </div>
    );
  }
}
