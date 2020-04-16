import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { WorkItem, WorkTitle, JobTitle } from "./styles";
import Loader from "../../components/Loader";
import Timeout from "../../components/Timeout";

const Work = ({ user }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Timeout(setIsLoaded);
  }, []);

  return (
    <Layout user={user}>
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
              </WorkItem>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
};

export default Work;
