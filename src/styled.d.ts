import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundAlt: string;
      backgroundDark: string;
      text: string;
      textSecondary: string;
      border: string;
    };
    fonts: {
      primary: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
    transitions: {
      default: string;
      slow: string;
      fast: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
