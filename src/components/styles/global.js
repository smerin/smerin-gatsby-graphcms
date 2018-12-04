import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
     font-family: 'Helvetica Neue', 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.tiffany};
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.turquoise};
    }
  }
`;

export default GlobalStyle;
