import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PretendardJP';
    src: url('/assets/font/PretendardJP.woff2') format("woff2");
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-width: 100%;
    min-height: 100%;

    overscroll-behavior: none;
  }

  div::-webkit-scrollbar {
    display: none;
  }

  h1, h2, h3, h4, span, a, p {
    padding: 0;
    margin: 0;
    white-space: pre-line;
  }

  body {
    width: 100%;
    height: 100%;

    font-family: PretendardJP;
    font-style: normal;
  }

  div {
    display: block;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }
`;
