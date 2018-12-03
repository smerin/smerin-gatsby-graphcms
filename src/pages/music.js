import React from "react";
//import { graphql, Link } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
//import Banner from "../components/Banner";
// import { fluidImage } from "../fragments";

const Music = () => {
  //const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO
        title="Guitarist and kora player"
        description="I play music from around the world"
        pathname="/music"
      />
      {/*}<Banner bannerImage={data.bannerImage} title="I play music" />*/}

      <div className="container">
        {/*edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </div>
          );
        })*/}
      </div>
    </Layout>
  );
};

// export const musicPageQuery = graphql`
//   query musicPageQuery {
//     bannerImage: file(relativePath: { eq: "guitar.jpg" }) {
//       ...fluidImage
//     }
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           frontmatter {
//             title
//             path
//             date
//           }
//         }
//       }
//     }
//   }
// `;

export default Music;
