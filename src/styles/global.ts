import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.background};
  }

  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;