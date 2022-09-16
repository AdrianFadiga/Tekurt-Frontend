import styled from 'styled-components';

export const BioCardStyle = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  .headerBio {
    display: flex;
    background-color: ${({ theme }) => theme.colors.background};
    justify-content: space-between;
    align-items: center;
    height: 35px;
  }

  .editBtn {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    font-size: 20px;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.colors.background};
  }

  .editBtn svg {
    background-color: transparent;
  }

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    background-color: transparent;
  }

  table {
    margin-top: 10px;
    width: 100%;
    background-color: transparent;
    border-collapse: collapse;
  }

  table tbody {
    width: 100%;
  }

  table tbody tr {
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
  }

  tbody tr td:nth-child(1) {
    width: 100%;
    padding: 5px 0;
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: 600;
  }

  tbody tr td:nth-child(2) {
    width: 100%;
    padding: 5px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    margin-bottom: 10px;
    height: 70px;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    overflow: hidden;
  }

  tr td {
    background-color: transparent;
  }

  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    color: ${({ theme }) => theme.colors.text};
    padding: 5px 7px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
  }

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

  @media(min-width: 1200px) {
    width: 500px;
    height: 600px;
    border-radius: 30px;
    border: none;
    border: ${({ theme }) => theme.title === 'light' && `1px solid ${theme.colors.border}`};

    table tbody tr {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }

    tbody tr td {
      font-size: 14px;
      line-height: 21px;
      padding: 16px 5px;
      background-color: ${({ theme }) => theme.colors.background};
      white-space: pre-wrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 70px;
    }
    
    tbody tr td:nth-child(1) {
      max-width: 115px;
      color: ${({ theme }) => theme.colors.placeholder};
    }

    tbody tr td:nth-child(2) {
      max-width: 314px;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;