import React, { Component } from 'react';
import config from './config.json';
import styles from './styles/Greeter.css';

class Greeter extends Component {
  render() {
    return (
      <div className={styles.root}>
        { config.greetText }
        <br />
        <span>and something else...</span>
      </div>
    );
  }
}

export default Greeter;
