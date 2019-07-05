import React, { Component } from 'react';

class MyComponent extends Component {
  state = { color: 'red' };
  onClick = () => {
    this.setState({ color: 'green' });
  }
  render() {
    const { color } = this.state;
    return (
        <button style={{ backgroundColor: color }} onClick={this.onClick}>싫다고</button>
    );
  }
}

export default MyComponent;