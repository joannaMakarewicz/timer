import "./App.css";

import React, { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useState(() => {
    setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This app shows timer with seconds - the start moment is when this app is
          opened.
        </p>
      </header>
      <main className="App-main">
        <h1>Let's count!</h1>
        <p className="App-counter">{seconds}</p>
        <a href="index.html" className="App-refresher">
        Refresh the page
        </a>
      </main>
    </div>
  );
};

function App() {
  return Timer();
}

export default App;
