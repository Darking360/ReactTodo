import React from 'react'
var {connect} = require("react-redux");
var actions = require("Actions");

class TodoSearch extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    var {showCompleted, searchText} = this.props;
    return(
      <div className="row">
        <form>
          <div className="small-12 colums">
            <input type="search" required ref="searchText" value={searchText} onChange={ () => {
                  var searchText = this.refs.searchText.value;
                  this.props.dispatch(actions.setSearchText(searchText));
              }}/>
          </div>
          <div className="small-12 colums">
            <input type="checkbox" ref="searchCompleted" checked={ showCompleted } onChange={ () => {
                var showCompleted = this.refs.searchCompleted.checked;
                this.props.dispatch(actions.toggleShowCompleted());
               }}/>
            Show completed todos
          </div>
        </form>
      </div>
    );
  }
};

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
