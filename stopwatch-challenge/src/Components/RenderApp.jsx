import React, { Component } from 'react';

import { ProgressBar } from 'react-bootstrap';
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
      totalSecond: 0,
      progress: 0,
    };

    this.changeTimer = this.changeTimer.bind(this);
    this.finishMinutes = this.finishMinutes.bind(this);
    this.setStandardTimer = this.setStandardTimer.bind(this);
    this.setCustomTimer = this.setCustomTimer.bind(this);
    this.checkZeros = this.checkZeros.bind(this);
    this.startClock = this.startClock.bind(this);
    this.pauseClock = this.pauseClock.bind(this);
    this.stopClock = this.stopClock.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
  }

  componentDidUpdate(_, PrevState) {
    const { timerSecond } = this.state;
    this.checkZeros();
    if (PrevState.timerSecond !== timerSecond) { this.updateProgress(); }
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

  updateProgress() {
    const { timerSecond, timerMin, totalSecond } = this.state;
    const porcentagem = totalSecond - (timerMin * 60 + timerSecond);
    const total = (porcentagem / totalSecond) * 100;
    const totalTrat = (total >= 0) ? total : 0;
    this.setState({ progress: totalTrat });
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
    const totalProgress = timerMin * 60 + timerSecond;
    this.setState({ totalSecond: totalProgress });
    if (timerMin === 0 && timerSecond === 0) {
      return null;
    }
    this.changeTimer();
  }

  pauseClock() {
    clearInterval(this.interval);
    console.log(this);
  }

  stopClock() {
    this.setState({ timerSecond: 0, timerMin: 0, totalSecond: 0 });
    this.total = 0;
    clearInterval(this.interval);
  }

  render() {
    const { timerSecond, timerMin, progress } = this.state;

    return (
      <main>
        <ProgressBar className="bar-progress" variant="info" animated now={ progress } />
        <Header />
        <section className="main-section">
          <ActionButtons
            startClock={ this.startClock }
            pauseClock={ this.pauseClock }
            stopClock={ this.stopClock }
          />
          <Timer
            timerSecond={ timerSecond }
            timerMin={ timerMin }
          />
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
