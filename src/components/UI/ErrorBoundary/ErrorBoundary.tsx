import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Обновите состояние, чтобы следующий рендер показал запасной интерфейс
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Вы можете также сохранить ошибку в журнале ошибок или отправить её на сервер
    console.error('Ошибка поймана в ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Вы можете отрендерить запасной интерфейс
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;