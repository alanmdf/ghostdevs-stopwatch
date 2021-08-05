import React, { Component } from 'react';
import PropTypes from 'prop-types';
import icons from './Icons/LibraryIcons';

class ActionButtons extends Component {
  render() {
    const { startClock, pauseClock, stopClock } = this.props;

    return (
      <div className="action-btns-div">
        <button type="button" onClick={ startClock }>
          <i className="fs-3">{icons.play}</i>
        </button>
        <button type="button" onClick={ pauseClock }>
          <i className="fs-3">{icons.pause}</i>
        </button>
        <button type="button" onClick={ stopClock }>
          <i className="fs-3">{icons.stop}</i>
        </button>
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
