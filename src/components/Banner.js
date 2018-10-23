import React from "react";
import Img from "gatsby-image";

const DigitalBanner = ({ bannerImage, title }) => {
  return (
    <div className="banner banner--digital">
      <Img fluid={bannerImage.childImageSharp.fluid} />
      <div className="container">
        <div className="banner__content">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default DigitalBanner;
