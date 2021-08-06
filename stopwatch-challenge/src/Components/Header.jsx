import React, { Component } from 'react';
import icons from './Icons/LibraryIcons';
import IconFantasma from './Fantamas.gif';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <i className="Icons-Header">
          {icons.menu}
        </i>
        <p className="text-white">
          <img src={ IconFantasma } alt="" className="icons-fantasma" />
          GhostDevs Trybe Stopwatch
          <img src={ IconFantasma } alt="" className="icons-fantasma" />
        </p>
        <i className="Icons-Header settings">
          {icons.settings}
        </i>
      </header>
    );
  }
}

export default Header;
