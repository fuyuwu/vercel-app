import React from "react";
import {
  StyledCard,
  StyledAbout,
  StyledAboutTitle,
  StyledFlex,
  StyledSkillCard,
  StyledLine,
  StyledAboutContent,
  StyledDivider,
  StyledListul,
  StyledAboutList,
} from "../../core/styles";
import { ReactIcon, Coding, Git } from "../Icons";
import { theme } from "../../core";

interface ISkillsProps {
  id: string;
  visible: string;
}
const skillList = [
  "React, hooks",
  "Typescript",
  "JavaScript",
  "webpack",
  "Storybook",
  "css in js",
  "styled-components",
];
const uiList = [
  "UI Flow",
  "Persona",
  "Prototype",
  "Wireframe",
  "Flowchart",
  "Functional map",
];
const Skills: React.FC<ISkillsProps> = (props) => {
  return (
    <StyledCard id={props.id} visible={props.visible}>
      <StyledAbout>
        <StyledAboutTitle fontSize={"25"}>Skills</StyledAboutTitle>
        <StyledFlex>
          <StyledSkillCard>
            <StyledAboutTitle>
              <ReactIcon width={24} height={24} fill={`${theme.darkFont}`} />
              Front-end
            </StyledAboutTitle>
            <StyledLine lineStyle={"solid"} lineWeight={3} />
            <StyledFlex direction={"row"}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <StyledAboutTitle fontSize={"18"}>Web</StyledAboutTitle>
                <StyledListul>
                  {skillList.map((list, idx) => {
                    return (
                      <StyledAboutList key={idx + 1}>
                        <StyledAboutContent>{list}</StyledAboutContent>
                      </StyledAboutList>
                    );
                  })}
                </StyledListul>
              </div>
              <StyledDivider />
              <div style={{ flex: 1, textAlign: "center" }}>
                <StyledAboutTitle fontSize={"18"}>App</StyledAboutTitle>
                <StyledAboutContent>React-Native</StyledAboutContent>
                <div style={{ textAlign: "center" }}>
                  <StyledAboutTitle fontSize={"18"}>Html/CSS</StyledAboutTitle>
                  <StyledAboutContent>SCSS/SASS</StyledAboutContent>
                  <StyledAboutContent>Html5</StyledAboutContent>
                  <StyledAboutContent>CSS3</StyledAboutContent>
                  <StyledAboutContent>ejs</StyledAboutContent>
                </div>
              </div>
            </StyledFlex>
          </StyledSkillCard>
          <StyledSkillCard>
            <StyledAboutTitle>
              <Coding width={24} height={24} fill={`${theme.darkFont}`} />
              UI / UX
            </StyledAboutTitle>
            <StyledLine lineStyle={"solid"} lineWeight={3} />
            <StyledFlex direction={"row"}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <StyledAboutTitle fontSize={"18"}>UI Tools</StyledAboutTitle>
                <StyledListul>
                  {uiList.map((list, idx) => {
                    return (
                      <StyledAboutList key={idx + 1}>
                        <StyledAboutContent>{list}</StyledAboutContent>
                      </StyledAboutList>
                    );
                  })}
                </StyledListul>
              </div>
              <StyledDivider />
              <div style={{ flex: 1, textAlign: "center" }}>
                <StyledAboutTitle fontSize={"18"}>Web Tools</StyledAboutTitle>
                <StyledListul>
                  <StyledAboutList>
                    <StyledAboutContent>Google Analytics</StyledAboutContent>
                  </StyledAboutList>
                  <StyledAboutList>
                    <StyledAboutContent>SEO</StyledAboutContent>
                  </StyledAboutList>
                </StyledListul>
              </div>
            </StyledFlex>
          </StyledSkillCard>
          <StyledSkillCard>
            <StyledAboutTitle>
              <Git width={24} height={24} fill={`${theme.darkFont}`} />
              GUI
            </StyledAboutTitle>
            <StyledLine lineStyle={"solid"} lineWeight={3} />
            <StyledAboutContent>github, gitKraken</StyledAboutContent>
          </StyledSkillCard>
        </StyledFlex>
      </StyledAbout>
    </StyledCard>
  );
};

export default Skills;
