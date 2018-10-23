import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
// import { fluidImage } from "../fragments";

const Music = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Banner bannerImage={data.bannerImage} title="I play music" />

      <div className="container">
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </div>
          );
        })}
        <div>
          <Link to="/tags">Browse by tag</Link>
        </div>
      </div>
    </Layout>
  );
};

export const musicPageQuery = graphql`
  query musicPageQuery {
    bannerImage: file(relativePath: { eq: "guitar.jpg" }) {
      ...fluidImage
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default Music;
