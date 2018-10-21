import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

const Music = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        return (
          <div key={frontmatter.path}>
            <p>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </p>
          </div>
        );
      })}
      <div>
        <Link to="/tags">Browse by tag</Link>
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
