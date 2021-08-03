import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActionButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { startClock, pauseClock, stopClock } = this.props;

    return (
      <div className="action-btns-div">
        <button type="button" onClick={ startClock }>Start</button>
        <button type="button" onClick={ pauseClock }>Pause</button>
        <button type="button" onClick={ stopClock }>Stop</button>
      </div>
    );
  }
}

ActionButtons.propTypes = {
  startClock: PropTypes.func.isRequired,
  pauseClock: PropTypes.func.isRequired,
  stopClock: PropTypes.func.isRequired,
};

export default ActionButtons;
