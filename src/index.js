import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppContainer from "./containers/appContainer";
import configureStore from './store/configureStore'

require("./main.scss");

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <AppContainer />
  </Provider>,
  document.getElementById("root")
);
