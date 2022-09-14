import styled from 'styled-components';

export const AddPostStyle = styled.section`
  .desktop {
    display: none;
  }

  button {
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media(min-width: 1200px) {
    text-align: right;
    padding: 10px;

    .desktop {
      display: block;
    }

    button {
      border: none;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 40px;
  }
  }  
`;