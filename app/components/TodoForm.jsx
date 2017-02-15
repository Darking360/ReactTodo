import React from 'react'
import uuid from 'node-uuid'

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.submitTodo = this.submitTodo.bind(this);
  }
  submitTodo(e){
    e.preventDefault();
    var todo = {
      text: this.refs.text.value,
      id: uuid(),
      completed: false
    };
    this.refs.text.value = "";
    this.props.submitTodo(todo);
  }
  render(){
    return(
      <div className="row">
        <form onSubmit={this.submitTodo}>
          <div className="small-12 colums">
            <input type="text" required ref="text"/>
          </div>
          <div className="small-12 colums">
            <button className="button" >Submit</button>
          </div>
        </form>
      </div>
    );
  }
};

export default TodoForm;
