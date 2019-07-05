import React, { PureComponent } from 'react';

class Title extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <p style={{ color: 'blue' }}>{title}</p>
    );
  }
}

export default Title;