import React, { Component } from 'react';
import Header from './components/header';
import Merchant from './components/merchant'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Merchant/>
      </div>
    );
  }
}

export default App;
