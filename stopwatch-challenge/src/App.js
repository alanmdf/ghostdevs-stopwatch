import React from 'react';

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
        <div className="timer-div">

        </div>
        <div className="setup-div">

        </div>
      </section>
    </main>
  );
}

export default App;
