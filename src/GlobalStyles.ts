import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F5F5F5;
  }

  :root {
    --small-text: 14px;
    --primary-bg-color: #F5F5F5;
    --border-color: #E5E5E9;
    --border-focus-color: #cfcece;
    --placeholder-color: #888888;
    --alert-color: #A72608;
  }
`;