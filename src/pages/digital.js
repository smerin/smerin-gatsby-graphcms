import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
// import { fluidImage } from "../fragments";

const Digital = ({ data }) => {
  return (
    <Layout>
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
