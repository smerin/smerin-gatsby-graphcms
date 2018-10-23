import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <h1>
            <Link to="/">George Smerin</Link>
          </h1>
          <nav>
            <Link to="/music">Music</Link>
            <Link to="/digital">Digital</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
