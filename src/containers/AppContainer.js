import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import StudentHome from '../pages/StudentHome'
import StudentNew from '../pages/StudentNew'
import StudentDetails from '../pages/StudentDetails'

const NavBar =
  props =>
      <ul className="list-inline navMenu">
        <li role="presentation">
            <NavLink to="/" exact>Home</NavLink>
        </li>
        <li role="presentation">
            <NavLink to="/students/new">New Student</NavLink>
        </li>
        <li role="presentation">
            <NavLink to="/students/details">Student Details</NavLink>
        </li>
      </ul>

export default class AppContainer extends Component {
    render () {
      return (
        <BrowserRouter>
          <div>
            {/* <NavBar /> */}
            <div>
              <Switch>
                  <Route path="/" exact component={StudentHome} />
                  <Route path="/students" exact component={StudentHome} />
                  <Route path="/students/new" exact component={StudentNew} />
                  <Route path="/students/details" exact component={StudentDetails} />
                  <Route path="/students/details/:id" exact component={StudentDetails} />
                  <Route path="/students/edit/:id"  component={StudentDetails} />

                  <Route render={
                      props =>
                          <div className="spacerTop alert alert-danger">
                              Sorry, the resource you requested ({props.location.pathname}) does not exist.
                          </div>} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      );
    }
}