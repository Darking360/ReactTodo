var redux = require("redux");
var {searchTextReducer, showCompleteReducer, todosReducer} = require("Reducers");

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompleteReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer);

  return store;

};
