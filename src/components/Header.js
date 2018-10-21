import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div>
      <h1>George Smerin</h1>
      <nav>
        <Link to="/music">Music</Link>
        <Link to="/digital">Digital</Link>
      </nav>
    </div>
  );
};

export default Header;
