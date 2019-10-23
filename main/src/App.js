import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';

class App extends Component{

  render() {
    return (
      <div>
        <Content />
      </div>
    );
  };
}

export default App;
