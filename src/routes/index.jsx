import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import CheckoutPage from "./CheckoutPage";
import EventsPage from "./EventsPage";
import HomePage from "./HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);
