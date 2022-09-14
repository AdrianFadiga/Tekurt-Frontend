import styled from 'styled-components';

export const BioCardStyle = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

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