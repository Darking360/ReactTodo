import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import TodoApp from 'TodoApp'

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={TodoApp}></IndexRoute>
    </Route>
  </Router>
  ,
  document.getElementById("app")
);
