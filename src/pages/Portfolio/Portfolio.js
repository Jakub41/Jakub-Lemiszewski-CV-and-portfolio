import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle } from "../../styles";
import Video from "../../components/Video";

const Portfolio = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Portfolio</SectionTitle>
      </div>
      <Video />
    </Layout>
  );
};

export default Portfolio;
