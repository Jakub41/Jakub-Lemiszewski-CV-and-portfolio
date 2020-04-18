import React, { useState } from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill } from "../../styles";
import {
  ProjectItem,
  ProjectTitle,
  SkillContainer,
  ProjectLink,
} from "./styles";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
import Loader from "../../components/Loader";
import Timeout from "../../components/Timeout";
import { Helmet } from "react-helmet";

const TITLE = "JL - Projects";

const Projects = ({ user }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  Timeout(setIsLoaded);

  return (
    <Layout user={user}>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {!isLoaded ? (
        <Loader />
      ) : (
        <div>
          <SectionTitle>Projects</SectionTitle>
          <ul>
            {user.projects.map((project, i) => (
              <ProjectItem key={i}>
                <ProjectTitle>{project.name}</ProjectTitle>
                <p>{project.summary}</p>
                <SkillContainer>
                  {[...project.languages, ...project.libraries].map(
                    (item, j) => (
                      <Pill key={j}>{item}</Pill>
                    )
                  )}
                </SkillContainer>
                <ProjectLink
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaExternalLinkAlt />
                </ProjectLink>
                <ProjectLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaGithubAlt />
                </ProjectLink>
              </ProjectItem>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
};

export default Projects;
