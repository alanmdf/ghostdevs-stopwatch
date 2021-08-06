import React, { Component } from 'react';
import Icons from './Icons/LibraryIcons';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer border border-3 rounded p-3">
        <article>
          <h5 className="text-white">Alan Freitas</h5>
          <div>
            <a href="" target="_blank" rel="noreferrer">
              <i className="icons">
                {Icons.gitHub}
              </i>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <i className="icons">
                {Icons.linkedin}
              </i>
            </a>
          </div>
        </article>
        <h6 className="text-white align-self-center dev">DEVELOPERS</h6>
        <article>
          <h5 className="text-white">JVictorC</h5>
          <div>
            <a href="https://github.com/JVictorC" target="_blank" rel="noreferrer">
              <i className="icons">
                {Icons.gitHub}
              </i>
            </a>
            <a href="https://www.linkedin.com/in/joao-victor-02227a180/" target="_blank" rel="noreferrer">
              <i className="icons">
                {Icons.linkedin}
              </i>
            </a>
          </div>
        </article>
      </footer>
    );
  }
}

export default Footer;
