import React from 'react';
import Timer from './Components/Timer';
import Header from './Components/Header';
import ActionButtons from './Components/ActionButtons';
import SetupButtons from './Components/SetupButtons';

import './App.css';

function App() {
  return (
    <main>
      <Header />
      <section className="main-section">
        <ActionButtons />
        <Timer />
        <SetupButtons />
      </section>
    </main>
  );
}

export default App;
