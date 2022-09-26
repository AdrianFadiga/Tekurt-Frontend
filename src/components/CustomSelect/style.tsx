import styled from 'styled-components';

export const CustomSelectStyle = styled.label`
  display: block;
  width: 50%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;

  div:nth-of-type(1) {
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div:nth-of-type(1) p, svg {
    background-color: transparent;
  }

  input {
    display: none;
  }

  .options {
    display: none;
  }

  input:checked ~ .options {
    display: block;
    position: fixed;
    padding: 5px 0;
    width: 145px;
    max-height: 200px;
    z-index: 3;
    overflow-x: hidden;
    box-shadow: -1px 0px 11px -1px #0000003d;
    border-radius: 10px;
  }

  .options div {
    padding: 5px 10px;
    cursor: pointer;
  }

  .options div:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }

  .options::-webkit-scrollbar {
    width: 8px;
  }

  .options::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secondaryBackground};
  }

  .options::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};    /* color of the scroll thumb */
    border-radius: 20px;
  }
`;