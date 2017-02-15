import React from 'react'

class TodoSearch extends React.Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(){
    var searchText = this.refs.searchText.value;
    var searchCompleted = this.refs.searchCompleted.checked;
    this.props.search(searchText, searchCompleted);
  }
  render(){
    return(
      <div className="row">
        <form>
          <div className="small-12 colums">
            <input type="text" required ref="searchText" onChange={this.handleSearch}/>
          </div>
          <div className="small-12 colums">
            <input type="checkbox" ref="searchCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </div>
        </form>
      </div>
    );
  }
};

export default TodoSearch;
