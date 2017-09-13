import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
  }
}

export default Header;
