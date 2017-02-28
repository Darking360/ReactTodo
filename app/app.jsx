import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import TodoApp from 'TodoApp'

var actions = require("Actions");
var store = require("Store").configure();

store.subscribe(() => {
  var state = store.getState();
  console.log("New state");
  console.log(state);
});

store.dispatch(actions.addTodo("Walk dog"));

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
