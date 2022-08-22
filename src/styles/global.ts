import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F5F5F5;
  }

  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  :root {
    --small-text: 14px;
    --xx-large-text: 40px;

    --primary-color: ${props => props.theme.colors.primary};
    --secondary-color: ${props => props.theme.colors.secondary};
    --border-color: ${props => props.theme.colors.border};
    --border-focus-color: ${props => props.theme.colors.borderFocus};
    --placeholder-color: ${props => props.theme.colors.placeholder};
    --alert-color: ${props => props.theme.colors.alert};
    --text-color: ${props => props.theme.colors.text};
  }
`;