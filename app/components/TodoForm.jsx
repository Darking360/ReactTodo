import React from 'react'

var actions = require("Actions");
var {connect} = require("react-redux");

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.submitTodo = this.submitTodo.bind(this);
  }
  submitTodo(e){
    e.preventDefault();
    this.props.dispatch(actions.addTodo(this.refs.text.value));
    this.refs.text.value = "";
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

export default connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoForm);
