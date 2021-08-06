import React, { Component } from 'react';
import IconFantasma from './Fantamas.gif';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <p className="text-white">
          <img src={ IconFantasma } alt="" className="icons-fantasma" />
          GhostDevs Trybe Stopwatch
          <img src={ IconFantasma } alt="" className="icons-fantasma" />
        </p>
      </header>
    );
  }
}

export default Header;
