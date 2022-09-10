import styled from 'styled-components';

export const BioCardStyle = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  height: 600px;
  width: 500px;
  padding: 40px;
  border-radius: 30px;

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    background-color: transparent;
  }

  table {
    width: 100%;
    background-color: transparent;
    border-collapse: collapse;
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
    width: 25px;
    color: ${({ theme }) => theme.colors.placeholder};
  }

  tbody tr td:nth-child(2) {
    max-width: 314px;
    color: ${({ theme }) => theme.colors.text};
  }
`;