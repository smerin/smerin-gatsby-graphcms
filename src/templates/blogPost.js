import React from "react";
import { StaticQuery, graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Template = ({ data, pageContext, location: { pathname } }) => {
  return (
    <StaticQuery
      query={query}
      render={({ gcms: { blog } }) => {
        return (
          <Layout>
            <SEO
              title={blog.title}
              description={blog.seoDescription}
              pathname={blog.pathname}
              article
            />

            <div className="container">
              <h1>{blog.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />

              <ul>{/*blog.tags.map(tag => <li>{tag}</li>)*/}</ul>
            </div>
          </Layout>
        );
      }}
    />
  );
};

/*

const {
  html,
  frontmatter: { title, description, excerpt, image }
} = data.markdownRemark;
const { next, prev } = pageContext;

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
*/

export const query = graphql`
  query($path: String!) {
    gcms {
      blog(where: { pathname: $path }) {
        date
        pathname
        title
        content
        banner {
          url
        }
        tags
        seoTitle
        seoDescription
      }
    }
  }
`;

export default Template;
