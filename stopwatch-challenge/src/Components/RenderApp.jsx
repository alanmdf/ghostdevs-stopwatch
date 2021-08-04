import React, { Component } from 'react';

import Timer from './Timer';
import Header from './Header';
import ActionButtons from './ActionButtons';
import SetupButtons from './SetupButtons';

class RenderApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerSecond: 0,
      timerMin: 0,
    };

    this.changeTimer = this.changeTimer.bind(this);
    this.finishMinutes = this.finishMinutes.bind(this);
    this.setStandardTimer = this.setStandardTimer.bind(this);
    this.setCustomTimer = this.setCustomTimer.bind(this);
    this.checkZeros = this.checkZeros.bind(this);
    this.startClock = this.startClock.bind(this);
    this.pauseClock = this.pauseClock.bind(this);
    this.stopClock = this.stopClock.bind(this);
  }

  componentDidUpdate() {
    this.checkZeros();
  }

  setStandardTimer(minutes) {
    this.setState({
      timerSecond: 0,
      timerMin: minutes,
    });
  }

  setCustomTimer(min, sec) {
    this.setState({
      timerSecond: sec,
      timerMin: min,
    });
  }

  checkZeros() {
    const { timerSecond, timerMin } = this.state;
    if (timerSecond < 0 && timerMin >= 1) {
      this.finishMinutes();
    } else if (timerSecond === 0 && timerMin < 1) {
      clearInterval(this.interval);
    }
  }

  changeTimer() {
    const ONE_SECOND = 1000;
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timerSecond: prevState.timerSecond - 1,
      }));
    }, ONE_SECOND);
  }

  finishMinutes() {
    this.setState((prevState) => ({
      timerSecond: 59,
      timerMin: prevState.timerMin - 1,
    }));
  }

  startClock() {
    const { timerSecond, timerMin } = this.state;
    if (timerMin === 0 && timerSecond === 0) {
      return null;
    } this.changeTimer();
  }

  pauseClock() {
    clearInterval(this.interval);
  }

  stopClock() {
    this.setState({ timerSecond: 0, timerMin: 0 });
  }

  render() {
    const { timerSecond, timerMin } = this.state;

    return (
      <main>
        <Header />
        <section className="main-section">
          <ActionButtons
            startClock={ this.startClock }
            pauseClock={ this.pauseClock }
            stopClock={ this.stopClock }
          />
          <Timer timerSecond={ timerSecond } timerMin={ timerMin } />
          <SetupButtons
            setStandardTimer={ this.setStandardTimer }
            setCustomTimer={ this.setCustomTimer }
          />
        </section>
      </main>
    );
  }
}

export default RenderApp;
