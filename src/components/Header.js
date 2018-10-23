import React from "react";
import { Link } from "gatsby";
import logo from "../images/gs-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <Link to="/">
              <img
                src={logo}
                alt="George Smerin logo"
                width="170"
                height="170"
              />
            </Link>
          </div>
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
