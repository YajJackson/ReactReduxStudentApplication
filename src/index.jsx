import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx';
import { createStore } from 'redux';
require("./main.scss");

ReactDOM.render(<App />, document.getElementById('root'));