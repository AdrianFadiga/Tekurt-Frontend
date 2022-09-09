import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      secondary: string,
      background: string,
      border: string,
      borderFocus: string,
      placeholder: string,
      alert: string,
      text: string,
      alertText: string,
      secondaryBackground: string,
      bodyBackground: string,
      iconNav: string,
    },
    sizes: {
      small: string,
      medium: string,
      xxLarge: string,
    }
  }
}