import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill } from "../../styles";
import {
  ProjectItem,
  ProjectTitle,
  SkillContainer,
  ProjectLink,
} from "./styles";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
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
    </Layout>
  );
};

export default Projects;
