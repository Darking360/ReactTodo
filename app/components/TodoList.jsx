import React from 'react'
import Todo from 'Todo'

class TodoList extends React.Component {
  render(){
    var {todos} = this.props;
    console.log(this.props.todos);
    var renderTodos = () => {
      if(todos != null){
        return todos.map((todo) => {
          return (<Todo key={todo.id} {...todo} onToggle={this.props.handleToggle}/>);
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

export default TodoList;
