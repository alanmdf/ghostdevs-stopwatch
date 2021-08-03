import React, { Component } from 'react';

class Timer extends Component {
  render() {
    let { timerMin, timerSecond } = this.props;
    timerMin = (timerMin < 10) ? `0${timerMin}` : timerMin;
    timerSecond = (timerSecond < 10) ? `0${timerSecond}` : timerSecond;

    return (
      <div className="timer-div">
        <span>
          {timerMin}
          :
        </span>
        <span>
          {timerSecond}
        </span>
      </div>
    );
  }
}

export default Timer;
