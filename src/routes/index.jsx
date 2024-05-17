import { createBrowserRouter } from "react-router-dom";
import { App } from "../components/App/App";
import { CheckoutPage } from "./Checkout/CheckoutPage";
import { EventsPage } from "./Events/EventsPage";
import { HomePage } from "./Home/HomePage";

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
