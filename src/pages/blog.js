import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Banner from "../components/Banner";

const Blog = ({ data, location }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO
        title="Diaries of a music addict"
        description="I'm always searching for interesting music from around the world"
        pathname={location.pathname}
      />

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

export const blogPostQuery = graphql`
  query blogPostQuery {
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

export default Blog;
