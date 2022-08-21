import React from 'react';
import { ErrorStyle } from './style';

interface Props {
  content: string
}

const ErrorMessage: React.FC<Props> = ({ content }) => {
  return (
    <ErrorStyle>
      <div />
      <p>{ content }</p>
    </ErrorStyle>
  );
};

export default ErrorMessage;