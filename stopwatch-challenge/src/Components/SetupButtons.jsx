import React, { Component } from 'react';

class SetupButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hadleClick() {}

  render() {
    return (
      <div className="timer-div">
        <button onClick={ this.hadleClick } type="button">3:00</button>
        <button onClick={ this.hadleClick } type="button">5:00</button>
        <button onClick={ this.hadleClick } type="button">10:00</button>
        <form>
          <input type="time" />
          <button type="button" onClick={ this.hadleClick }>Ok</button>
        </form>
      </div>
    );
  }
}

export default SetupButton;
