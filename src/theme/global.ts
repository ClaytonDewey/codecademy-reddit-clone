import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

  :root {
    --white: #fff;
    --black: #333;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    font-style: normal;
    font-weight: normal;
  }

  html,
  body {
    margin: 0px auto;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    background: var(--white);
    color: var(--black);
  }

  body {
    position: relative;
    overflow-x: hidden;
    font-size: 1.6rem;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
