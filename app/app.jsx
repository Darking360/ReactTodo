import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import TodoApp from 'TodoApp'

var {Provider} = require("react-redux");
var actions = require("Actions");
var store = require("Store").configure();

store.subscribe(() => {
  var state = store.getState();
  localStorage.setItem("todos",JSON.stringify(state.todos));
});

var initialTodos = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

console.log(initialTodos());

store.dispatch(actions.addTodos(initialTodos()));

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={TodoApp}></IndexRoute>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById("app")
);
