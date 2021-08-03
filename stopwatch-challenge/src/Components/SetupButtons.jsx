import React, { Component } from 'react';

class SetupButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hadleClick() {}

  render() {
    return (
      <div className="setup-div">
        <div className="setup-btns-div" >
          <button onClick={ this.hadleClick } type="button">3:00</button>
          <button onClick={ this.hadleClick } type="button">5:00</button>
          <button onClick={ this.hadleClick } type="button">10:00</button>
        </div>
        <form className="customize-timer-div">
          <input type="time" />
          <button type="button" onClick={ this.hadleClick }>Ok</button>
        </form>
      </div>
    );
  }
}

export default SetupButtons;
