import styled from 'styled-components';

export const Span = styled.span`
  font-size: var(--small-text);
  text-align: center;
  color: var(--placeholder-color);

  a {
    all: unset;
    color: var(--secondary-color);
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`;