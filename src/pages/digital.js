import React from "react";
import Layout from "../components/Layout";
import DigitalBanner from "../components/DigitalBanner";

const Digital = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <DigitalBanner />
      <div className="container">
        <p>Web dev and all that stuff...</p>
      </div>
    </Layout>
  );
};

export default Digital;

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/lake/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
