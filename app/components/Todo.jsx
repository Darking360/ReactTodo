import React from 'react'

class Todo extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var {text,id,completed} = this.props;
    return(
      <div className="row" onClick={() => {
          this.props.onToggle(id);
        }}>
        <div className="small-2 columns">
          <input type="checkbox" checked={completed} onChange={() => {return}}/>
        </div>
        <div className="small-10 columns">
          <span>{text}</span><br/>
          <span>Fecha y las otras cosas</span>
        </div>
      </div>
    );
  }
};

export default Todo;
