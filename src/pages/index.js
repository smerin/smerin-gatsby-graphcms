import React from "react";
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <div className="container">
        <p>Homepage stuff here</p>
      </div>
    </Layout>
  );
};

export default Home;
