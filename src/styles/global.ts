import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.bodyBackground};
    font-family: 'Roboto', sans-serif;
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secondaryBackground};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};    /* color of the scroll thumb */
    border-radius: 20px;
  }
`;