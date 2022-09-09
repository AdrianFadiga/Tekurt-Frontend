import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.background};
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