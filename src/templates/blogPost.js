import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/SEO";

import Layout from "../components/Layout";

const Template = ({ data, pageContext, location: { pathname } }) => {
  const {
    html,
    frontmatter: { title, description, excerpt, image }
  } = data.markdownRemark;
  const { next, prev } = pageContext;

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ""}
        excerpt={excerpt || description || ""}
        image={image.childImageSharp.sizes.src}
        pathname={pathname}
        article
      />
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
        description
        excerpt
        image {
          childImageSharp {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;

export default Template;
