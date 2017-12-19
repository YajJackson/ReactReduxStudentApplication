import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import StudentHome from '../pages/StudentHome'
import StudentNew from '../pages/StudentNew'
import StudentDetails from '../pages/StudentDetails'
import StudentUpdate from '../pages/StudentUpdate'

export default class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Switch>
              <Route path="/" exact component={StudentHome} />
              <Route path="/students" exact component={StudentHome} />
              <Route path="/students/new" exact component={StudentNew} />
              <Route path="/students/details/:id" exact component={StudentDetails} />
              <Route path="/students/edit/:id"  component={StudentUpdate} />

              <Route render={props => <div>Sorry, the resource you requested ({props.location.pathname}) does not exist.</div>}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
