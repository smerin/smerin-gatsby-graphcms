import React from "react";
import SEO from "../components/SEO";

const Test = ({ location }) => {
  return (
    <div className="container">
      <SEO
        title="Test page"
        description="This is my test page"
        pathname={location.pathname}
      />
      <p>Test</p>
    </div>
  );
};

export default Test;
