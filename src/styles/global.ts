import styled, { createGlobalStyle } from 'styled-components';

const fontStack =
  "'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0;
}

html {
  font: 62.5% ${fontStack};
}

body {
  background: #312e38;
  color: #fff;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, input, textarea, button {
  font-family: ${fontStack};
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}

`;
