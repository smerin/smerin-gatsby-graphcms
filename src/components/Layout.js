import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Header from "./Header";
import Footer from "./Footer";
import theme from "./styles/theme.js";
import GlobalStyle from "./styles/global.js";

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Normalize />
        <GlobalStyle />
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </StyledPage>
    </ThemeProvider>
  );
};

export default Layout;
