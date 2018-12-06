import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Blog = () => (
  <StaticQuery
    query={blogPostQuery}
    render={({ gcms: { blogs }, allBannerImage }) => {

      return (
        <Layout>
          <SEO
            title="Diaries of a music addict"
            description="I'm always searching for interesting music from around the world"
            pathname="/blog"
          />

          <div className="container">
            {blogs.map((blog, index) => {
              const bannerMatch = allBannerImage.edges.filter(edge => edge.node.fileName === blog.banner.fileName);
              const bannerFluid = bannerMatch ? bannerMatch[0].node.image.childImageSharp.fluid : null;
              return (
                <div key={index}>
                  <Link to={blog.pathname}>{blog.title}</Link>
                  {bannerFluid && (
                    <Img fluid={bannerFluid} />
                  )}
                </div>
              );
            })}
            <div>
              <Link to="/tags">Browse by tag</Link>
            </div>
          </div>
        </Layout>
      );
    }}
  />
);

export const blogPostQuery = graphql`
  query blogPostQuery {
    gcms {
      blogs(orderBy: date_DESC) {
        date
        pathname
        title
        banner {
          url
          fileName
        }
      }
    }
    allBannerImage {
      edges {
        node {
          fileName
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
