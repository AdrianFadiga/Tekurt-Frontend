import styled from 'styled-components';

export const SearchStyle = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
  background-color: transparent;

  input {
    width: 50px;
    display: none;
  }

  button {
    all: unset;
  }
`;