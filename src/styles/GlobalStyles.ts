import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.white};
    line-height: 1.5;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.primary};
    font-weight: 700;
    line-height: 1.2;
    color: ${theme.colors.white};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${theme.transitions.default};
  }

  button {
    font-family: ${theme.fonts.primary};
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    transition: ${theme.transitions.default};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
