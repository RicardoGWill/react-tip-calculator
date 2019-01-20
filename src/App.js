import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header-and-Body">
          <div className="App-header">
            <Header />
          </div>
          <div>
            <Body />
          </div>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
