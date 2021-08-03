import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SetupButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log();
  }

  render() {
    const { setStandardTimer } = this.props;
    const THREE_MINUTES = 3;
    const FIVE_MINUTES = 5;
    const TEN_MINUTES = 10;

    return (
      <div className="setup-div">
        <div className="setup-btns-div">
          <button
            onClick={ () => setStandardTimer(THREE_MINUTES) }
            type="button"
          >
            03:00
          </button>
          <button
            onClick={ () => setStandardTimer(FIVE_MINUTES) }
            type="button"
          >
            05:00
          </button>
          <button
            onClick={ () => setStandardTimer(TEN_MINUTES) }
            type="button"
          >
            10:00
          </button>
        </div>
        <form className="customize-timer-div">
          <input type="time" />
          <button type="button" onClick={ this.handleClick }>Ok</button>
        </form>
      </div>
    );
  }
}

SetupButtons.propTypes = {
  setStandardTimer: PropTypes.func.isRequired,
};

export default SetupButtons;
