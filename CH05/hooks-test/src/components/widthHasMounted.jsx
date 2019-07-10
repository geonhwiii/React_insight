import React, { Component, useState, useEffect } from 'react';

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  return hasMounted;
}

function widthHasMounted(InputComponent) {
  return class OutputComponent extends Component {
    state = {
      hasMounted: false,
    };
    componentDidMount() {
      this.setState({ hasMounted: true });
    }
    render() {
      const { hasMounted } = this.state;
      return <InputComponent {...this.props} hasMounted={hasMounted} />;
    }
  };
}

export default widthHasMounted;