import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
// arg1 : all the different reducers
// arg2 : initial state of application. we don't really care about setting up initial state.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
// ReactDOM.render : root component, where we're attempting to render
// Provider tag : read changes from redux store.
