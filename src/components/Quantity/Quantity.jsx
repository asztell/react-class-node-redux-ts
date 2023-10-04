import { Component } from "react";
import "./Quantity.scss";

export class Quantity extends Component {
  constructor(props) {
    super(props);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleDecrement() {
    const { ticketsCount, setTicketsCount } = this.props;
    if (ticketsCount > 0) {
      setTicketsCount(ticketsCount - 1);
    }
  }
  handleIncrement() {
    const { ticketsCount, setTicketsCount } = this.props;
    setTicketsCount(ticketsCount + 1);
  }
  render() {
    const { ticketsCount } = this.props;

    return (
      <div className="Quantity">
        <h2>Quantity</h2>
        <div className="Container">
          <button onClick={this.handleDecrement}>-</button>
          <span className="Value" style={{ width: "20px" }}>
            {ticketsCount}
          </span>
          <button onClick={this.handleIncrement}>+</button>
        </div>
      </div>
    );
  }
}
