import styled from "styled-components";
import { white } from "@carbon/colors";

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const ProjectTitle = styled.h4`
  font-weight: bold;
`;

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  &:hover {
   color: red;
  }
  margin-top: 0.5rem;
  margin-left: 1rem;
`;
