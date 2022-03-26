import React, { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("World");

  const onChangeBtn = () => {
    if (text === "World") {
      setText("To You");
    }else {
      setText("World");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>The header Hello World</h1>
      </header>
      <main>
        <h2>The main Hello World: {text}</h2>
        <button onClick={onChangeBtn}>change</button>
      </main>
      <footer>
        <h3>The footer Hello World </h3>
      </footer>
    </div>
  );
}

export default App;
