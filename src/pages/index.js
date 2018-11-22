import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
// import { fluidImage } from "../fragments";

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="George Smerin | Musician and web developer"
        titleTemplate="%s"
        description="Welcome to the home page of George Smerin, musician and web developer from Bristol (UK)."
      />
      <div className="home">
        <div className="home__banner" />
        <div className="container">
          <h1>Hi, I'm George Smerin!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
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
