import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Template = ({ data, pageContext }) => {
  const { blog } = data.gcms;
  const { next, prev } = pageContext;
  console.log(data.bannerImage);

  return (
    <Layout>
      <SEO
        title={blog.title}
        description={blog.seoDescription}
        pathname={blog.pathname}
        article
      />
      <Img fluid={data.bannerImage.image.childImageSharp.fluid} />
      <div className="container">
        <h1>{blog.title}</h1>
        <ReactMarkdown source={blog.content} />

        <ul>
          {blog.tags.map((tag, index) => (
            <li key={index}>
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
  query($pathSlug: String!, $bannerName: String!) {
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
    bannerImage(fileName:{eq: $bannerName } ) {
      image {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default Template;
