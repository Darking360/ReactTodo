import uuid from 'node-uuid';
export var searchTextReducer = (state = '', action) => {
  switch(action.type){
    case "SET_SEARCH_TEXT":
      return action.searchText;
    default:
    return state;
  };
};

export var showCompleteReducer = (state = false, action) => {
  switch(action.type){
    case "TOGGLE_SHOW_COMPLETED":
      return !state;
    default:
      return state;
  };
};

export var todosReducer = (state = [], action) => {
  switch(action.type){
    case "ADD_TODOS":
      return[
        ...state,
        ...action.todos
      ];
    case "ADD_TODO":
      return[
        ...state,
        {
          text: action.text,
          id: uuid(),
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return [
      ...state.map((todo) => {
        if(todo.id == action.id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    ]
    default:
      return state;
  };
};
