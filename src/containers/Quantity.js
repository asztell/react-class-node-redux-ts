import { connect } from "react-redux";
import { setTicketsCount } from "../actions/ticketPurchasing";
import { Quantity } from "../components/Quantity";

const mapStateToProps = (state) => {
  return {
    ticketsCount: state.ticketPurchasing.ticketsCount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setTicketsCount: (ticketsCount) => dispatch(setTicketsCount(ticketsCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);
