import React, { Component } from 'react';
import icons from './Icons/LibraryIcons';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <i className="Icons-Header">
          {icons.menu}
        </i>
        <p>👻 GhostDevs Trybe Stopwatch 👻</p>
        <i className="Icons-Header settings">
          {icons.settings}
        </i>
      </header>
    );
  }
}

export default Header;
