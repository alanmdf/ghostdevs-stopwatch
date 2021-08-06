import React, { Component } from 'react';

import { ProgressBar } from 'react-bootstrap';
import Timer from './Timer';
import Header from './Header';
import ActionButtons from './ActionButtons';
import SetupButtons from './SetupButtons';
import IconFantasma from './Fantamas.gif';
import TimerComplete from './TimerComplete';
import Footer from './Footer';

class RenderApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerSecond: 0,
      timerMin: 0,
      totalSecond: 0,
      progress: 0,
      pause: false,
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
      progress: 0,
    });
  }

  setCustomTimer(min, sec) {
    this.setState({
      timerSecond: sec,
      timerMin: min,
      progress: 0,
    });
    document.getElementById('minutesInput').value = '';
    document.getElementById('secondsInput').value = '';
  }

  updateProgress() {
    const ONE_MINUTE = 60;
    const { timerSecond, timerMin, totalSecond } = this.state;
    const porcentagem = totalSecond - (timerMin * ONE_MINUTE + timerSecond);
    const total = (porcentagem / totalSecond) * 100;
    const totalTrat = (total >= 0) ? Math.round(total) : 0;
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
    const ONE_MINUTE = 60;
    const { timerSecond, timerMin, pause } = this.state;
    if (pause === false) {
      const totalProgress = timerMin * ONE_MINUTE + timerSecond;
      this.setState({ totalSecond: totalProgress });
    }
    this.setState({ pause: false });
    if (timerMin === 0 && timerSecond === 0) {
      return null;
    }
    this.changeTimer();
  }

  pauseClock() {
    clearInterval(this.interval);
    this.setState({ pause: true });
  }

  stopClock() {
    this.setState({ timerSecond: 0, timerMin: 0, totalSecond: 0, progress: 0 });
    clearInterval(this.interval);
  }

  render() {
    const { timerSecond, timerMin, progress } = this.state;
    const END_PROGRESS = 95;
    const imageFantamas = (
      <img
        src={ IconFantasma }
        alt=""
        className="icons-fantasma"
        style={ { marginLeft: `${(progress === 100) ? END_PROGRESS : progress}%` } }
      />
    );
    let componeteTimer = (
      <Timer
        timerSecond={ timerSecond }
        timerMin={ timerMin }
      />
    );
    if (progress >= 100) {
      componeteTimer = <TimerComplete />;
    }

    return (
      <main>
        <ProgressBar
          className="bar-progress"
          variant="info"
          label={ imageFantamas }
          animated
          now={ progress }
        />
        <Header />
        <section className="main-section">
          <ActionButtons
            startClock={ this.startClock }
            pauseClock={ this.pauseClock }
            stopClock={ this.stopClock }
          />
          {componeteTimer}
          <SetupButtons
            setStandardTimer={ this.setStandardTimer }
            setCustomTimer={ this.setCustomTimer }
          />
        </section>
        <Footer />
      </main>
    );
  }
}

export default RenderApp;
