import React from 'react'
import TodoSearch from 'TodoSearch'
import TodoForm from 'TodoForm'
import TodoList from 'TodoList'

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      showCompleted: false,
      todos: []
    };
    if(localStorage.getItem("todos") != null){
      this.state = {
        todos: JSON.parse(localStorage.getItem("todos"))
      };
    }
    this.addTodo = this.addTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleSearch(searchText,searchCompleted){
    var filter = searchText.toLowerCase();
    var filteredArray = [];
    var original = JSON.parse(localStorage.getItem("todos"));
    original.map((todo) => {
      if(filter.length > 0){
        if(todo.completed == searchCompleted && todo.text.indexOf(filter) > -1){
          filteredArray.push(todo);
        }
      }else{
        if(todo.completed == searchCompleted){
          filteredArray.push(todo);
        }
      }
    });
    this.setState({
      showCompleted: searchCompleted,
      searchText: searchText,
      todos: filteredArray
    });
  }
  addTodo(todo){
    let array = this.state.todos;
    array.push(todo);
    this.setState({
      todos: array
    });
    localStorage.setItem("todos",JSON.stringify(this.state.todos));
  }
  handleToggle(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }
  render(){
    return(
      <div className="row">
        <div className="small-4 columns small-centered">
          <h2>React Todo</h2>
        </div>
        <div className="small-4 columns small-centered">
          <div className="row">
            <TodoSearch search={this.handleSearch}/>
          </div>
          <div className="row">
            <TodoList todos={this.state.todos} handleToggle={this.handleToggle}/>
          </div>
          <div className="row">
            <TodoForm submitTodo={this.addTodo}/>
          </div>
        </div>
      </div>
    );
  }
};

export default TodoApp;
