import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph, Pill } from "../../styles";
import { WorkItem, WorkTitle, JobTitle, Highlighted } from "./styles";
import Loader from "../../components/Loader";
import Timeout from "../../components/Timeout";
import { Helmet } from "react-helmet";

const TITLE = "JL - Jobs";

const Work = ({ user }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Timeout(setIsLoaded);
  }, []);

  return (
    <Layout user={user}>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {!isLoaded ? (
        <Loader />
      ) : (
        <div>
          <SectionTitle>Work</SectionTitle>
          <ul>
            {user.work.map((work, i) => (
              <WorkItem key={i}>
                <WorkTitle>{work.position}</WorkTitle>
                <div>
                  <JobTitle>{work.company}</JobTitle>{" "}
                  <span>{work.location}</span>
                  <span> &sdot; </span>
                  <span>
                    {work.start.year} to {work.end.year}
                  </span>
                </div>
                <Paragraph>{work.summary}</Paragraph>
                <Highlighted>
                  {[...work.highlights].map((item, j) => (
                    <Pill key={j}>{item}</Pill>
                  ))}
                </Highlighted>
              </WorkItem>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
};

export default Work;
