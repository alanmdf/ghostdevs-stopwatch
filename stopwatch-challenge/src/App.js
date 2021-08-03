import React from 'react';
import SetupButton from './Components/SetupButtons';
import Timer from './Components/Temporizador';
import ActionButtons from './Components/ActionButtons';

import './App.css';

function App() {
  return (
    <main>
      <header className="app-header">
        👻 GhostDevs Trybe Stopwatch 👻
      </header>
      <section className="main-section">
        <ActionButtons className="action-buttons" />
        <div className="timer-div" />
        <div className="setup-div" />
      </section>
    </main>
  );
}

export default App;
