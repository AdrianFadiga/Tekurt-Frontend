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
    --xx-large-text: 35px;

    --primary-color: #F5F5F5;
    --secondary-color: #ED2590;
    --border-color: #E5E5E9;
    --border-focus-color: #cfcece;
    --placeholder-color: #888888;
    --alert-color: #A72608;
    --text-color: #fff;
  }
`;