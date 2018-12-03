import React from "react";
import { Link } from "gatsby";

const SingleTagTemplate = ({ data, pageContext }) => {
  const { blogs, tagName } = pageContext;

  return (
    <div>
      <div>Posts about {tagName}</div>
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
  );
};

export default SingleTagTemplate;
