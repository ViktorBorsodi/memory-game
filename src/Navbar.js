import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <h1>Memory Game</h1>
        <h2 onClick={this.props.newGame}>New Game</h2>
      </header>
    );
  }
}

export default Navbar;