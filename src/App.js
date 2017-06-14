import React, { Component } from 'react';
import './App.css';
import './Bootstrap.css';
import Nav from './components/Nav';
import Header from './components/Header';
import 'animate.css/animate.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="app-data">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
