import React, { Component } from 'react';
import './style.css';
import SearchIcon from '../search.svg';

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: false,
      value: '',
      className:'search'
    }
    this.handleChange = this.handleChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  onFocus(){
    this.setState({
      isFocused: !this.state.isFocused
    })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
    if(this.state.value.length >=10) {
    this.setState({className:'search warning'})
    }
    else {
      this.setState( {className: 'search' })
    }
  }
 
  render() {
    return (
      <div className="wrapper">
        <input onFocus={this.onFocus} onBlur={this.onFocus} onChange={this.handleChange} type="search" id="search" placeholder="Type something to search..." className={this.state.className}/> 
        <div>
          {!this.state.isFocused && <img src={SearchIcon} alt="search" className="icon"/>}
        </div>
      </div>
    )
  }
}

export default SearchBox;