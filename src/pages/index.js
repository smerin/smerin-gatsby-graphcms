import React from "react";
import { graphql, Link } from "gatsby";
//import Img from "gatsby-image";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <SEO
        title="George Smerin | Musician and web developer"
        titleTemplate="%s"
      />
      <div className="container">
        <div className="posts">
          <p>Home</p>
        </div>
      </div>
      <Link to="/blog">Blog</Link>
    </Layout>
  );
};

export const testQuery = graphql`
  query {
    gcms {
      blogs(orderBy: date_DESC) {
        date
        pathname
        title
        banner {
          url
        }
      }
    }
  }
`;

export default Home;
