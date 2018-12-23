import React, { Component } from 'react';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import AddContact from './components/AddContact/AddContact';

import { Provider } from './context';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    // let toggle = false;

    // return React.createElement('div', { className: 'App' }, 'Hello World!');
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
          {/*
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
         */}
        </div>
      </Provider>
    );
  }
}

export default App;
