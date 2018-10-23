import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../sass/style.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
