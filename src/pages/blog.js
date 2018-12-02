import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Blog = () => (
  <StaticQuery
    query={blogPostQuery}
    render={({ gcms: { blogs } }) => {
      return (
        <Layout>
          <SEO
            title="Diaries of a music addict"
            description="I'm always searching for interesting music from around the world"
            pathname="/blog"
          />

          <div className="container">
            {blogs.map((blog, index) => {
              console.log(blog);
              return (
                <div key={index}>
                  <Link to={blog.pathname}>{blog.title}</Link>
                  <img src={blog.banner.url} alt={blog.title} />
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
        }
      }
    }
  }
`;

export default Blog;
