import React, {Component} from 'react';
import "./SearchPanel.css";

export default class SearchPanel extends Component {
  state = {
    term: ''
  }
  onLabelSearchFun = (e) => {
    const term = e.target.value;
    this.setState({ term })
    this.props.onLabelSearch(term)
  }
  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onLabelSearchFun}
        value={this.state.term}
        / >
    );
  }
  
};