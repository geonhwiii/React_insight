import React, { Component } from 'react';

class MyComponent2 extends Component {
  state = { count1: 0, count2: 0 }
  onClick = () => {
    this.setState((prev) => ({ count1: prev.count1 + 1 }));
    this.setState((prev) => ({ count1: prev.count1 + 1 }));
  }
  render() {
    const { count1, count2 } = this.state;
    return (
      <>
        <h3>상탯값을 일부만 변경하는코드 </h3>
        <p>{`카운트1: ${count1} / 카운트2: ${count2}`}</p>
        <button onClick={this.onClick}>카운트증가</button>
      </>
    );
  }
}

export default MyComponent2;
