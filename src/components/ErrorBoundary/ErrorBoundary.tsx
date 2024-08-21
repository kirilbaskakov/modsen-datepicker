import React, { Component, ReactNode } from 'react';

import { ErrorText } from './styled';

interface Props {
  children: ReactNode;
}

class ErrorBoundary extends Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorText>Something went wrong.</ErrorText>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
