'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Taiwan, Japan, USA } from "../Icons";

const skillCategories = [
  {
    label: "AI",
    accent: "var(--primary-main)",
    skills: ["Claude Code", "AI-Assisted Development", "Prompt Engineering", "Agentic Coding", "MCP"],
  },
  {
    label: "Backend & Git",
    accent: "#0077B6",
    skills: ["Apollo Client", "GraphQL", "RESTful API", "WebSocket", "Git"],
  },
  {
    label: "Styling",
    accent: "#C9184A",
    skills: ["Tailwind CSS", "SASS/SCSS", "styled-components", "Element-ui", "Element Plus", "Vant", "CSS Module", "CSS3", "Ant Design", "Material Design"],
  },
  // {
  //   label: "UI / UX",
  //   accent: "#6D6875",
  //   skills: ["UI Flow", "Wireframe", "Prototype", "Adobe XD", "Google Analytics", "SEO"],
  // },
];

const humanLangs = [
  { icon: <Taiwan width={32} height={32} />, percent: 100 },
  { icon: <Japan width={32} height={32} />, percent: 100, badge: "JLPT N1" },
  { icon: <USA width={32} height={32} />, percent: 50 },
];

const LANG_ACCENT = "#F2765E";

const RING_SIZE = 88;
const RING_STROKE = 6;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
/** Matches StyledRingProgress's transition-duration, so the flag fades in right as the ring finishes drawing */
const RING_DURATION_MS = 1000;

const Skills: React.FC = () => {
  const langListRef = useRef<HTMLDivElement>(null);
  const [barsInView, setBarsInView] = useState(false);

  useEffect(() => {
    const el = langListRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBarsInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <StyledWrap>
      <StyledCategoryGrid>

        <StyledFrontendCard>
          <StyledCategoryHeader accent="#1A2A40">
            <StyledAccentBar accent="#1A2A40" />
            <StyledCategoryLabel accent="#1A2A40">Frontend</StyledCategoryLabel>
          </StyledCategoryHeader>
          <StyledStorybookPreviewLink href="https://component-storybook.vercel.app" target="_blank" rel="noreferrer">
            <StyledStorybookPreviewImage src="/storybook-switch.png" alt="Storybook Switch component demo" width={1000} height={700} />
            <StyledStorybookPreviewOverlay>Open in Storybook ↗</StyledStorybookPreviewOverlay>
          </StyledStorybookPreviewLink>
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
            <StyledCategoryHeader accent={LANG_ACCENT}>
              <StyledAccentBar accent={LANG_ACCENT} />
              <StyledCategoryLabel accent={LANG_ACCENT}>Languages</StyledCategoryLabel>
            </StyledCategoryHeader>
            <StyledLangList ref={langListRef}>
              {humanLangs.map((lang, i) => {
                const delay = i * 150;
                return (
                  <StyledLangItem key={i}>
                    <StyledRingWrap>
                      <StyledRingSvg viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}>
                        <StyledRingTrack cx={RING_SIZE / 2} cy={RING_SIZE / 2} r={RING_RADIUS} />
                        <StyledRingProgress
                          cx={RING_SIZE / 2}
                          cy={RING_SIZE / 2}
                          r={RING_RADIUS}
                          percent={lang.percent}
                          inView={barsInView}
                          delay={delay}
                        />
                      </StyledRingSvg>
                      <StyledRingFlag inView={barsInView} delay={delay + RING_DURATION_MS}>
                        {lang.icon}
                      </StyledRingFlag>
                    </StyledRingWrap>
                    <StyledLangMeta>
                      {lang.badge && <StyledLangPercent>{lang.badge}</StyledLangPercent>}
                    </StyledLangMeta>
                  </StyledLangItem>
                );
              })}
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

const StyledStorybookPreviewLink = styled.a`
  position: relative;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(26, 42, 64, 0.12);
  line-height: 0;

  &:hover img {
    transform: scale(1.02);
  }

  &:hover div {
    opacity: 1;
  }
`;

const StyledStorybookPreviewImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
`;

const StyledStorybookPreviewOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(26, 42, 64, 0.55);
  color: #F1DEC6;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  opacity: 0;
  transition: opacity 0.25s ease;
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
  border-top: 3px solid ${LANG_ACCENT};
  grid-column: 1 / -1;
`;


const StyledLangList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;

  @media screen and (min-width: 600px) {
    gap: 40px;
  }
`;

const StyledLangItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 96px;
`;

const StyledRingWrap = styled.div`
  position: relative;
  width: ${RING_SIZE}px;
  height: ${RING_SIZE}px;
  flex-shrink: 0;
`;

const StyledRingSvg = styled.svg`
  width: 100%;
  height: 100%;
  /* start progress at 12 o'clock instead of 3 o'clock */
  transform: rotate(-90deg);
`;

const StyledRingTrack = styled.circle`
  fill: none;
  stroke: var(--cream-border);
  stroke-width: ${RING_STROKE};
`;

const StyledRingProgress = styled.circle<{ percent: number; inView: boolean; delay: number }>`
  fill: none;
  stroke: ${LANG_ACCENT};
  stroke-width: ${RING_STROKE};
  stroke-linecap: round;
  stroke-dasharray: ${RING_CIRCUMFERENCE};
  stroke-dashoffset: ${({ inView, percent }) =>
    RING_CIRCUMFERENCE * (1 - (inView ? percent : 0) / 100)};
  transition: stroke-dashoffset ${RING_DURATION_MS}ms cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${({ delay }) => delay}ms;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const StyledRingFlag = styled.div<{ inView: boolean; delay: number }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? "scale(1)" : "scale(0.6)")};
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: ${({ delay }) => delay}ms;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
  }
`;

const StyledLangMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const StyledLangPercent = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${LANG_ACCENT};
`;

export default Skills;
