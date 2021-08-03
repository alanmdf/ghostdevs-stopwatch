import React, { Component } from 'react';

class ActionButtons extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button type='button'>Start</button>
        <button type='button'>Pause</button>
        <button type='button'>Stop</button>
      </div>
    )
  }
}

export default ActionButtons;