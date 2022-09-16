import styled from 'styled-components';

export const CustomSelectStyle = styled.label`
  .selectRel {
    display: block;
    width: 50%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    cursor: pointer;
    background-color: transparent;
  }

  .selectRel div:nth-of-type(1) {
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .selectRel div:nth-of-type(1) p {
    background-color: transparent;
  }

  .selectRel div:nth-of-type(1) svg {
    background-color: transparent
  }

  .selectRel input {
    display: none;
  }

  .selectRel .options {
    display: none;
  }

  .selectRel input:checked ~ .options {
    display: block;
    position: fixed;
    padding: 5px 0;
    width: 145px;
    z-index: 3;
    overflow: scroll;
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
`;