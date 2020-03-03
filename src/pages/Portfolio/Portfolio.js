import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle } from "../../styles";
import { PortfolioCard } from "./styles";
import ReactPlayer from "react-player";

const Portfolio = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Portfolio</SectionTitle>
      </div>
      <PortfolioCard>
        <ReactPlayer url="" />
      </PortfolioCard>
    </Layout>
  );
};

export default Portfolio;
