import React from "react";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const SingleTagTemplate = ({ data, pageContext }) => {
  const { blogs, tagName } = pageContext;

  return (
    <Layout>
      <SEO
        title={`Tag: ${tagName}`}
        description={`All posts tagged with ${tagName}`}
        pathname={`/tags/${tagName}`}
      />
      <div className="container">
        <div>Posts tagged {tagName}</div>
        <div>
          <ul>
            {blogs.map((blog, index) => {
              return (
                <li key={index}>
                  <Link to={blog.pathname}>{blog.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default SingleTagTemplate;
