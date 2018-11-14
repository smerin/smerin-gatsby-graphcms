import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
// import { fluidImage } from "../fragments";

const Digital = ({ data, location }) => {
  return (
    <Layout>
      <SEO
        title="Test page"
        description="This is my test page"
        pathname={location.pathname}
      />
      <Banner bannerImage={data.bannerImage} title="I make websites" />
      <div className="container">
        <p>Web dev and all that stuff...</p>
      </div>
    </Layout>
  );
};

export default Digital;

export const digitalPageQuery = graphql`
  query digitalPageQuery {
    bannerImage: file(relativePath: { eq: "desk.jpg" }) {
      ...fluidImage
    }
  }
`;
