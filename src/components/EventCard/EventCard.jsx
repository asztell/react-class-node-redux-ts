import { Component } from "react";
import classnames from "classnames";
import styles from "./EventCard.module.scss";

export class EventCard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    const { event, onEventSelect } = this.props;
    console.log("onEventSelect", onEventSelect);
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
      // currency could potentially come from the browser's locale
      currency: "USD",
    }).format(price);

    const cardClassName = classnames(
      styles["Event-Card"],
      { [styles["Selected"]]: isSelected },
      styles[className]
    );

    return (
      <div onClick={this.onClick} className={cardClassName}>
        <div className={styles["Event-Name"]}>{name}</div>
        <div className={styles["Event-Date"]}>{date}</div>
        <div className={styles["Event-Location"]}>{location}</div>
        <div className={styles["Event-Price"]}>{formattedPrice}</div>
      </div>
    );
  }
}
