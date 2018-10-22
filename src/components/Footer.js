import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <p>&copy; George Smerin {year}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
