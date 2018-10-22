import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import MusicBanner from "../components/MusicBanner";

const Music = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <MusicBanner />

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

export const BlogPostQuery = graphql`
  query BlogPostQuery {
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
