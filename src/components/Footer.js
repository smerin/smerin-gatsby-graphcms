import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <p>&copy; George Smerin {year}</p>
    </div>
  );
};

export default Footer;
