import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph, Pill } from "../../styles";
import { ProfileLink, StackIcon } from "./styles";
import { FaGithub, FaLinkedinIn, FaInfinity } from "react-icons/fa";
import { IconContext } from "react-icons";


const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && " | "}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                <IconContext.Provider
                  value={{ className: "p-icons" }}
                >
                  {profile.network === "GitHub" ? (
                    <FaGithub />
                  ) : profile.network === "LinkedIn" ? (
                    <FaLinkedinIn />
                  ) : (
                    <FaInfinity />
                  )}
                </IconContext.Provider>
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
      <div>
        <SectionTitle>
          <StackIcon />
        </SectionTitle>
      </div>
    </Layout>
  );
};

export default Me;
