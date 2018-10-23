import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
// import { fluidImage } from "../fragments";

const Home = ({ data }) => {
  return (
    <Layout>
      <Banner bannerImage={data.bannerImage} title="Welcome to my website" />
      <div className="container">
        <p>Homepage stuff here</p>
      </div>
    </Layout>
  );
};

export default Home;

export const homePageQuery = graphql`
  query homePageQuery {
    bannerImage: file(relativePath: { eq: "lake.jpg" }) {
      ...fluidImage
    }
  }
`;
