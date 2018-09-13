import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Footer } from './footer';
import './App.css';

export class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Footer />
      </div>
    );
  }
}

export default App;
