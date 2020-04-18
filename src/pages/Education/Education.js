import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { EducationItem, Institution, Degree } from "./styles";
import Loader from "../../components/Loader";
import Timeout from "../../components/Timeout";
import { Helmet } from "react-helmet";

const TITLE = "JL - Education";

const Education = ({ user }) => {
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
          <SectionTitle>Education</SectionTitle>
          <ul>
            {user.education.map((education, i) => (
              <EducationItem key={i}>
                <Institution>{education.institution}</Institution>
                <div>
                  <Degree>
                    {education.studyType}, {education.area}
                  </Degree>{" "}
                  <span> &sdot; </span>
                  <span>
                    {education.start.year} to {education.end.year}
                  </span>
                </div>
                <Paragraph>
                  {education.description.replace("\n\n", "\n")}
                </Paragraph>
              </EducationItem>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
};

export default Education;
