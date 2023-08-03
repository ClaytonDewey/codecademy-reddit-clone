import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

  :root {
    --white: #fff;
    --black: #333;
    --color-background: #fcfcfc;
    --color-background-secondary: #f3f3f3;
    --color-foreground: #ffffff;
    --color-border: #e6e6e6;
    --color-text-header: #444444;
    --color-text-body: #6f6f6f;
    --color-text-secondary: #717171;
    --color-text-invert: #ffffff;
    --color-text-link: #4ec3f5;
    --color-branding: #3d5af1;
    --color-branding-transparent: #3d5af140;

    --color-alert: #ff304f;
    --color-success: #45b81f;
    --color-on-hover: #0000000f;

    --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
    --box-shadow-hover: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;

    --spacing-0: 4px;
    --spacing-1: 8px;
    --spacing-2: 16px;
    --spacing-3: 24px;
    --spacing-4: 36px;
    --spacing-5: 64px;

    --radius: 4px;
    --radius-2: 8px;
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
