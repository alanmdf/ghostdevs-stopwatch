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
            className="mx-2 btn btn-secondary btn-lg"
            onClick={ () => setStandardTimer(THREE_MINUTES) }
            type="button"
          >
            03:00
          </button>
          <button
            className="mx-2 btn btn-secondary btn-lg"
            onClick={ () => setStandardTimer(FIVE_MINUTES) }
            type="button"
          >
            05:00
          </button>
          <button
            className="mx-2 btn btn-secondary btn-lg"
            onClick={ () => setStandardTimer(TEN_MINUTES) }
            type="button"
          >
            10:00
          </button>
        </div>
        <form className="customize-timer-div">
          <div className="input-group w-3">
            <span className="input-group-text fs-5">Timer</span>
            <input
              id="minutesInput"
              type="text"
              name="customMin"
              className="form-control fs-3"
              placeholder="Minutes"
              onChange={ this.handleChange }
              maxLength="2"
            />
            <input
              type="text"
              id="secondsInput"
              name="customSec"
              className="form-control fs-3"
              placeholder="Seconds"
              onChange={ this.handleChange }
              maxLength="2"
            />
            <button
              type="button"
              className="btn btn-secondary btn-lg width fs-4"
              onClick={ () => setCustomTimer(customMin, customSec) }
            >
              Ok
            </button>
          </div>
        </form>
      </div>
    );
  }
}

/* <div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control">
  <input type="text" aria-label="Last name" class="form-control">
</div> */

SetupButtons.propTypes = {
  setStandardTimer: PropTypes.func.isRequired,
  setCustomTimer: PropTypes.func.isRequired,
};

export default SetupButtons;
