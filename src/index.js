import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import thunk from "redux-thunk";
import { router } from "./routes";
import { rootReducer } from "./store/reducers";
import "./index.scss";

const middleWareEnhancer = applyMiddleware(thunk);
const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeWithDevTools(middleWareEnhancer);
const store = createStore(rootReducer, composedEnhancers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);
