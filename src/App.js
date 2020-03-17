import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Namaste from './components/Namaste';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {/* Greet Component */}
        <div>
          <Greet name="Rooney" heroName="Batman">
            <button>Click Me</button>
          </Greet>
          <Greet name="Scholes" heroName="SuperMan"/>
        </div>

        {/* Namaste Component */}
        <Namaste name="England"/>
        <Namaste name="Nepal"/>
        
        {/* Message Component */}
        <Message/>

        {/*Testing Counters */}  
        <Counter/>

      </div>
    </div>
  );
}

export default App;
