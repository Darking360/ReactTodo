import React from 'react'
import Todo from 'Todo'
var {connect} = require("react-redux")

function handleSearch(todos,searchText,searchCompleted){
  var filter = searchText.toLowerCase();
  var filteredArray = [];
  var original = todos;
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
  return filteredArray;
}

class TodoList extends React.Component {
  render(){
    var {todos, searchText, showCompleted} = this.props;
    var filteredtodos = handleSearch(todos,searchText,showCompleted)
    var renderTodos = () => {
      if(filteredtodos != null){
        return filteredtodos.map((todo) => {
          return (<Todo key={todo.id} {...todo} />);
        });
      }
    };
    return(
      <div>
        {renderTodos()}
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
