import React from 'react';
import Timer from './Components/Timer';
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
        <ActionButtons />
        <Timer />
        <SetupButtons />
      </section>
    </main>
  );
}

export default App;
