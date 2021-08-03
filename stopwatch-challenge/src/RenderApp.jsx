import React, { Component } from 'react';
import Timer from './Components/Timer';
import Header from './Components/Header';
import ActionButtons from './Components/ActionButtons';
import SetupButtons from './Components/SetupButtons';

import './App.css';

class RenderApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerSecond: 5,
      timerMin: 0,
    };
    this.changeTimer = this.changeTimer.bind(this);
    this.finishMinutes = this.finishMinutes.bind(this);
  }

  componentDidMount() {
    this.changeTimer();
  }

  componentDidUpdate() {
    const { timerSecond, timerMin } = this.state;
    if (timerSecond < 0 && timerMin >= 1) {
      this.finishMinutes();
    } else if (timerSecond === 0 && timerMin < 1) {
      clearInterval(this.interval);
    }
  }

  finishMinutes() {
    this.setState((prevState) => ({
      timerSecond: 59,
      timerMin: prevState.timerMin - 1,
    }));
  }

  changeTimer() {
    const ONE_SECOND = 1000;
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timerSecond: prevState.timerSecond - 1,
      }));
    }, ONE_SECOND);
  }

  render() {
    const { timerSecond, timerMin } = this.state;
    return (
      <main>
        <Header />
        <section className="main-section">
          <ActionButtons />
          <Timer timerSecond={ timerSecond } timerMin={ timerMin } />
          <SetupButtons />
        </section>
      </main>
    );
  }
}

export default RenderApp;
