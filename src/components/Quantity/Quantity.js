import { connect } from "react-redux";
import { setTicketsCount } from "../../store/actions/ticketPurchasing";
import { Quantity } from "./Quantity.jsx";

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
