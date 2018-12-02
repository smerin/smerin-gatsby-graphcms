import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Home = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO
        title="George Smerin | Musician and web developer"
        titleTemplate="%s"
      />
      <div className="container">
        <div className="posts">
          {edges.map(edge => {
            const {
              frontmatter: { path, title, date, excerpt, banner }
            } = edge.node;
            console.log(banner);
            return (
              <div key={path} className="posts__item">
                <Link to={path}>
                  <h2>{title}</h2>
                </Link>
                <p>{excerpt}</p>
                <p>{date}</p>
                <Img fluid={banner.childImageSharp.fluid} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const homePageQuery = graphql`
  query homePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "Do MMMM YYYY")
            excerpt
            banner {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
