import React from "react"
import { graphql, Link} from 'gatsby';
import Header from '../components/Header';

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  console.log(edges);

  return (
    <div>
      <Header />
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
          </div>
        );
      })}
      <div>
        <Link to='/tags'>Browse by tag</Link>
      </div>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default Layout;

