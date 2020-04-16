import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { SectionTitle } from "../../styles";
import Video from "../../components/Video";
import Loader from "../../components/Loader";
import Timeout from "../../components/Timeout";

const Portfolio = ({ user }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Timeout(setIsLoaded);
  }, []);

  return (
    <Layout user={user}>
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          <SectionTitle>Portfolio</SectionTitle>
          <Video />
        </>
      )}
    </Layout>
  );
};

export default Portfolio;
