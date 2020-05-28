import React, { Component } from 'react';
import './style.css';
import SearchIcon from '../search.svg';

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: false
    }
  }
  
  onFocus = () => {
    let isFocused = { ...this.state.isFocused}
    this.setState({
      isFocused: true
    })
  }

  render() {
    return (
      <div className="wrapper">
        <input onFocus={this.onFocus} type="search" id="search" placeholder="Type something to search..." className="search"/>
        <div>
          {!this.state.isFocused && <img src={SearchIcon} alt="search" className="icon"/>}
        </div>
      </div>
    )
  }
}

export default SearchBox;