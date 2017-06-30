import React, {Component} from 'react';
// {Componet} means after import React,
// pull out its property React.Componet and assign to Componet
// it's equal to const Componet = React.Componet;

// Every react file need to import 'react',
// because every JSX clause will be transpiled into React.creatElement() object
// So if no import react, will throw an error.

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term:''}
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        Search Your Video:
        <input
          value={this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    )
  }


}

export default SearchBar;
