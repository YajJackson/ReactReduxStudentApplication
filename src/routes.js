import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

import StudentIndex from './pages/StudentIndex';
import StudentNew from './pages/StudentNew';
import StudentShow from './pages/StudentShow';

export default (
  <Route path="/" component={StudentIndex}>
    <IndexRoute component={StudentIndex} />
    {/* <Route path="Students/new" component={StudentNew} />
    <Route path="Students/:id" component={studentShow} /> */}
  </Route>
)