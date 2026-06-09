'use client';

import React from "react";
import styled from "styled-components";
import { Taiwan, Japan, USA } from "../Icons";

const frontendGroups = [
  {
    color: "#42b883",
    skills: ["Vue 2", "Vue 3", "Pinia", "Options API", "Composition API", "Vite 5", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    color: "#61DAFB",
    skills: ["React", "Hooks", "TypeScript", "JavaScript (ES6+)", "Redux", "React-Redux", "React-hook-form", "React Native", "Webpack", "Storybook", "CSS-in-JS"],
  },
];

const skillCategories = [
  {
    label: "Styling",
    accent: "#C9184A",
    skills: ["Tailwind CSS", "SASS/SCSS", "styled-components", "Element-ui", "Element Plus", "Vant", "CSS Module", "CSS3", "Ant Design", "Material Design"],
  },
  {
    label: "API & GIT",
    accent: "#0077B6",
    skills: ["Apollo Client", "GraphQL", "RESTful API", "WebSocket", "Git"],
  },
  {
    label: "UI / UX",
    accent: "#6D6875",
    skills: ["UI Flow", "Wireframe", "Prototype", "Adobe XD", "Google Analytics", "SEO"],
  },
];

const humanLangs = [
  { icon: <Taiwan width={28} height={28} />, label: "Native", percent: 100 },
  { icon: <Japan width={28} height={28} />, label: "JLPT N1", percent: 80 },
  { icon: <USA width={28} height={28} />, label: "Intermediate", percent: 50 },
];

const Skills: React.FC = () => {
  return (
    <StyledWrap>
      <StyledCategoryGrid>

        <StyledFrontendCard>
          <StyledCategoryHeader accent="#1A2A40">
            <StyledAccentBar accent="#1A2A40" />
            <StyledCategoryLabel accent="#1A2A40">Frontend</StyledCategoryLabel>
          </StyledCategoryHeader>
          <StyledGroupsRow>
            {frontendGroups.map((group, i) => (
              <React.Fragment>
                <StyledGroup>
                  <StyledTagRow>
                    {group.skills.map((s) => (
                      <StyledSkillTag key={s} color={group.color}>{s}</StyledSkillTag>
                    ))}
                  </StyledTagRow>
                </StyledGroup>
                {i < frontendGroups.length - 1 && <StyledGroupDivider />}
              </React.Fragment>
            ))}
          </StyledGroupsRow>
        </StyledFrontendCard>

        {skillCategories.map((cat) => (
          <StyledCategoryCard key={cat.label} accent={cat.accent}>
            <StyledCategoryHeader accent={cat.accent}>
              <StyledAccentBar accent={cat.accent} />
              <StyledCategoryLabel accent={cat.accent}>{cat.label}</StyledCategoryLabel>
            </StyledCategoryHeader>
            <StyledTagRow>
              {cat.skills.map((s) => (
                <StyledSkillTag key={s}>{s}</StyledSkillTag>
              ))}
            </StyledTagRow>
          </StyledCategoryCard>
        ))}

          <StyledLangCard>
            <StyledCategoryHeader accent="#e49826">
              <StyledAccentBar accent="#e49826" />
              <StyledCategoryLabel accent="#e49826">Languages</StyledCategoryLabel>
            </StyledCategoryHeader>
            <StyledLangList>
              {humanLangs.map((lang) => (
                <StyledLangItem key={lang.label}>
                  <StyledLangIcon>{lang.icon}</StyledLangIcon>
                  <StyledLangMeta>
                    <StyledLangSub>{lang.label}</StyledLangSub>
                  </StyledLangMeta>
                  <StyledLangBarWrap>
                    <StyledTrack>
                      <StyledFill percent={lang.percent} />
                    </StyledTrack>
                  </StyledLangBarWrap>
                  <StyledLangPercent>{lang.percent}%</StyledLangPercent>
                </StyledLangItem>
              ))}
            </StyledLangList>
          </StyledLangCard>

      </StyledCategoryGrid>
    </StyledWrap>
  );
};


const StyledWrap = styled.div`
  padding: 30px;
`;

const StyledCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const cardBase = `
  background: var(--cream-card);
  border-radius: 12px;
  padding: 18px 20px 20px;
  border: 1px solid var(--cream-border);
  box-shadow: 0 2px 12px rgba(26, 42, 64, 0.06);
`;

const StyledFrontendCard = styled.div`
  ${cardBase}
  border-top: 3px solid #1A2A40;
  grid-column: 1 / -1;
`;

const StyledCategoryCard = styled.div<{ accent: string }>`
  ${cardBase}
  border-top: 3px solid ${({ accent }) => accent};
`;

const StyledCategoryHeader = styled.div<{ accent: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const StyledAccentBar = styled.div<{ accent: string }>`
  width: 4px;
  height: 16px;
  border-radius: 2px;
  background: ${({ accent }) => accent};
  flex-shrink: 0;
`;

const StyledCategoryLabel = styled.span<{ accent: string }>`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--content-text-sub);
`;

const StyledGroupsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 0;
  }
`;

const StyledGroup = styled.div`
  flex: 1;
`;

const StyledGroupDivider = styled.div`
  display: none;

  @media screen and (min-width: 600px) {
    display: block;
    width: 1px;
    background: var(--cream-border);
    margin: 0 16px;
    align-self: stretch;
  }
`;

const StyledTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const StyledSkillTag = styled.span<{ color?: string }>`
  font-size: 12px;
  font-weight: 500;
  padding: 4px 11px;
  border-radius: 20px;
  background: ${({ color }) => color ? `${color}12` : "rgba(26, 42, 64, 0.06)"};
  color: ${({ color }) => color ?? "var(--content-text)"};
  letter-spacing: 0.3px;
  border: 1px solid ${({ color }) => color ? `${color}30` : "var(--cream-border)"};
  white-space: nowrap;
`;

/* Languages */

const StyledLangCard = styled.div`
  ${cardBase}
  border-top: 3px solid #e49826;
  grid-column: 1 / -1;
`;


const StyledLangList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    gap: 24px;
  }
`;

const StyledLangItem = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledLangIcon = styled.div`
  flex-shrink: 0;
  line-height: 0;
`;

const StyledLangMeta = styled.div`
  flex-shrink: 0;
`;

const StyledLangSub = styled.p`
  margin: 2px 0 0;
  font-size: 11px;
  color: var(--content-text-sub);
  letter-spacing: 0.3px;
`;

const StyledLangBarWrap = styled.div`
  flex: 1;
  min-width: 0;
`;

const StyledTrack = styled.div`
  height: 4px;
  border-radius: 99px;
  background: var(--cream-border);
  overflow: hidden;
`;

const StyledFill = styled.div<{ percent: number }>`
  height: 100%;
  width: ${({ percent }) => percent}%;
  border-radius: 99px;
  background: #e49826;
`;

const StyledLangPercent = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: var(--content-text-sub);
  flex-shrink: 0;
  text-align: right;
`;

export default Skills;
