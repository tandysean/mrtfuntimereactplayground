import React, { Component } from 'react';
import Footer from './footer';

export default class App extends Component {
  constructor () {
    super();
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className="container">
          <p>this is where components go</p>
        </div>
        <Footer />
      </div>
    );
  }
}
