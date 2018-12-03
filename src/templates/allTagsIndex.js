import React from "react";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <SEO
        title="Tags"
        description="Tag index for smerin.com blog"
        pathname="/tags"
      />
      <div className="container">
        <ul>
          {tags.map((tagName, index) => {
            return (
              <li key={index}>
                <Link to={`/tags/${tagName}`}>{tagName}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default AllTagsTemplate;
