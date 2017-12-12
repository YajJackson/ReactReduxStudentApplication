import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import configureStore from './store/configureStore'
require("./main.scss")

const store = configureStore()
console.log("Index Working", routes)
ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('root')
);