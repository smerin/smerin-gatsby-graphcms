import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

const Template = ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { title }
  } = data.markdownRemark;
  const { next, prev } = pageContext;

  return (
    <Layout>
      <div className="container">
        <h1>{title}</h1>
        <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
        {next && (
          <Link to={next.frontmatter.path}>{next.frontmatter.title}</Link>
        )}
        {prev && (
          <Link to={prev.frontmatter.path}>{prev.frontmatter.title}</Link>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
