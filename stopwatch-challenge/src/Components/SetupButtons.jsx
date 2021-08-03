import React, { Component } from 'react';

class SetupButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log();
  }

  render() {
    const { setStandardTimer } = this.props;

    return (
      <div className="setup-div">
        <div className="setup-btns-div" >
          <button onClick={ () => setStandardTimer(3) } type="button">03:00</button>
          <button onClick={ () => setStandardTimer(5) } type="button">05:00</button>
          <button onClick={ () => setStandardTimer(10) } type="button">10:00</button>
        </div>
        <form className="customize-timer-div">
          <input type="time" />
          <button type="button" onClick={ this.handleClick }>Ok</button>
        </form>
      </div>
    );
  }
}

export default SetupButtons;
