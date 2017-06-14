import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="image-bg-fluid-height">
        <img className="img-responsive img-center" src="http://placehold.it/200x200&amp;text=Logo" alt=""/>
      </header>
    );
  }
}

export default Header;
