import styled from 'styled-components';

interface Props {
  invalidField: boolean;
}

export const InputStyle = styled.section<Props>`
  position: relative;

  input {
    width: 100%;
    padding: 21px 30px;
    border: 1px solid ${props => props.invalidField ? 'var(--alert-color)' : 'var(--border-color)'};
    border-radius: 30px;
    font-size: var(--small-text);
    margin: 0 auto;
    background-color: var(--primary-bg-color);
    outline: none;
    transition: 0.1s ease;
  }

  input:focus {
    border: 1px solid var(--border-focus-color);
  }

  input::placeholder {
    color: var(--placeholder-color);
  }

  svg {
    color: var(--alert-color);
    position: absolute;
    font-size: 120%;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`;