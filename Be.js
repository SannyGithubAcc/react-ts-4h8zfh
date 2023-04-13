import React, { useState } from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  background-color: #ffdddd;
  color: #ff0000;
  font-size: 18px;
  padding: 10px;
`;

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  function handleError() {
    setHasError(true);
  }

  return hasError ? (
    <ErrorMessage>
      <h1>Oops! Something went wrong.</h1>
      <p>Please try again later or contact support if the problem persists.</p>
    </ErrorMessage>
  ) : (
    props.children
  );
}

export default ErrorBoundary;
