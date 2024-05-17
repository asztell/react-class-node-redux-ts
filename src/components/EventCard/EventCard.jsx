import { Component } from "react";
import classnames from "classnames";
import { formatDate } from "../../utils/locale";
import styles from "./EventCard.module.scss";

const { Container, Name, Date, Location, Price, Selected } = styles;

export class EventCard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    const { event, onEventSelect } = this.props;
    console.log("onEventSelect event", event);
    onEventSelect(event.id);
  };

  render() {
    const { event, isSelected, className } = this.props;
    console.log("className", className);
    const { ISODate, name, price, location } = event;

    const { date, time, day } = formatDate(ISODate);
    const formattedDate = `${day}, ${date} at ${time}`;
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

    const cardClassName = classnames(
      Container,
      { [Selected]: isSelected },
      { [className]: className && className }
    );

    return (
      <div onClick={this.onClick} className={cardClassName}>
        <div className={Name}>{name}</div>
        <div className={Date}>{formattedDate}</div>
        <div className={Location}>{location}</div>
        <div className={Price}>{formattedPrice}</div>
      </div>
    );
  }
}
