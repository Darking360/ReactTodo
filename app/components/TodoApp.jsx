import React from 'react'
import TodoSearch from 'TodoSearch'
import TodoForm from 'TodoForm'
import TodoList from 'TodoList'

class TodoApp extends React.Component {
  render(){
    return(
      <div className="row">
        <div className="small-4 columns small-centered">
          <h2>React Todo</h2>
        </div>
        <div className="small-4 columns small-centered">
          <div className="row">
            <TodoSearch/>
          </div>
          <div className="row">
            <TodoList/>
          </div>
          <div className="row">
            <TodoForm/>
          </div>
        </div>
      </div>
    );
  }
};

export default TodoApp;
