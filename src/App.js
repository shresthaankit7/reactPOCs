import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Greet from "./components/Greet";
import Namaste from "./components/Namaste";
import Message from "./components/Message";
// import Counter from "./components/Counter";
// import Form from "./components/Forms/Form";
// import Table from "./components/Fragments/Table";
// import EventBind from "./components/EventBind";
// import FunctionClick from "./components/FunctionClick";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-scroll">
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
            <ul>
              <li>
                <Link to="/">Greet</Link>
              </li>
              <li>
                <Link to="/namaste">Namaste</Link>
              </li>
              <li>
                <Link to="/message">Message</Link>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Greet name="test" heroName="ankit"/>
          </Route>
          <Route path="/namaste">
            <Namaste />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
        </Switch>

        <div>
          <footer>
            <p>Please don't push this to production</p>
            <p>Demo in progress</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
