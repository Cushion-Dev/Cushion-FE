import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/assets/font/Pretendard.woff2') format("woff2");
  }

  * {
    padding: 0;
    margin: 0;

    white-space: pre-line;
    box-sizing: border-box;
  }

  html, body, #root {
    min-width: 100%;
    min-height: 100%;
  }

  h1, h2, h3, h4, span, a, p {
    padding: 0;
    margin: 0;
  }

  body {
    width: 100%;
    height: 100%;

    font-family: Pretendard;
    font-style: normal;
  }

  div {
    display: block;
  }

  a {
    text-decoration: none;
  }

`;
