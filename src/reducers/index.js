import { combineReducers } from "redux";
import ticketPurchasing from "./ticketPurchasing";
import { events } from "./events";
import { payment } from "./payment";

export const rootReducer = combineReducers({
  ticketPurchasing,
  events,
  payment,
});
