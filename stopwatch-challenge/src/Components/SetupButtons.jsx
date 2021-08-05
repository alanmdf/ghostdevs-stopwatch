import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SetupButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customMin: 0,
      customSec: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const LIMIT_TIMER = 59;
    if (target.value > LIMIT_TIMER) { target.value = LIMIT_TIMER; }
    this.setState({
      [target.name]: Number(target.value),
    });
  }

  render() {
    const { setStandardTimer, setCustomTimer } = this.props;
    const { customMin, customSec } = this.state;
    const THREE_MINUTES = 3;
    const FIVE_MINUTES = 5;
    const TEN_MINUTES = 10;

    return (
      <div className="setup-div">
        <div className="setup-btns-div">
          <button
            className="mx-2"
            onClick={ () => setStandardTimer(THREE_MINUTES) }
            type="button"
          >
            03:00
          </button>
          <button
            className="mx-2"
            onClick={ () => setStandardTimer(FIVE_MINUTES) }
            type="button"
          >
            05:00
          </button>
          <button
            className="mx-2"
            onClick={ () => setStandardTimer(TEN_MINUTES) }
            type="button"
          >
            10:00
          </button>
        </div>
        <form className="customize-timer-div">
          <input
            type="text"
            name="customMin"
            className="input-minutes"
            placeholder="Minutes"
            onChange={ this.handleChange }
            maxLength="2"
          />
          <input
            type="text"
            name="customSec"
            className="input-seconds"
            placeholder="Seconds"
            onChange={ this.handleChange }
            maxLength="2"
          />
          <button
            type="button"
            onClick={ () => setCustomTimer(customMin, customSec) }
          >
            Ok
          </button>
        </form>
      </div>
    );
  }
}

SetupButtons.propTypes = {
  setStandardTimer: PropTypes.func.isRequired,
  setCustomTimer: PropTypes.func.isRequired,
};

export default SetupButtons;
