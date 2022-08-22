import styled from 'styled-components';

export const ErrorStyle = styled.div`
  top: 0px;
  left: 30px;
  color: var(--text-color);
  position: absolute;
  background-color: var(--alert-color);
  padding: 5px;
  border-radius: 5px;

  p {
    background-color: var(--alert-color);
    z-index: 3;
    font-size: 8px;
  }

  div {
    position: absolute;
    top: 18px;
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid var(--alert-color);
  }
`;