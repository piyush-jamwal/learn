import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from '../src/src/js/components/List';
import Form from '../src/src/js/components/Forms';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hello<List/> world
        </p>
        <Form/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
