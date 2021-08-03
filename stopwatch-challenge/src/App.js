import React from 'react';

import ActionButtons from './Components/ActionButtons';
import SetupButtons from './Components/SetupButtons';

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
        <SetupButtons className="setup-div" />
      </section>
    </main>
  );
}

export default App;
