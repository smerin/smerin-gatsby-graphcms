import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";

const Template = ({ data, pageContext }) => {
  const { blog } = data.gcms;
  const { next, prev } = pageContext;
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
        <ReactMarkdown source={blog.content} />

        <ul>
          {blog.tags.map(tag => (
            <li>
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>

        <div>
          {prev && <Link to={prev.pathname}>{prev.title}</Link>}
          {next && <Link to={next.pathname}>{next.title}</Link>}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    gcms {
      blog(where: { pathname: $pathSlug }) {
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
