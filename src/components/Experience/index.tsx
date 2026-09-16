'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import luxonsImg from "../../core/images/luxons.png";
import innoImg from "../../core/images/inno.png";
import quancomImg from "../../core/images/quancom.png";
import lionImg from "../../core/images/lion.jpg";

const experiences = [
  {
    period: "2023 — 2026",
    logo: luxonsImg,
    company: "雷速網絡科技",
    role: "Frontend Engineer",
    cover: false,
    highlight: "處理大型迭代模組，開發及優化多重彈窗流程與共用搜尋機制",
    techs: ["Vue 2/3", "TypeScript", "Tailwind CSS", "Vant"],
  },
  {
    period: "2021 — 2023",
    logo: innoImg,
    company: "伊諾科技",
    role: "Frontend Engineer",
    cover: false,
    highlight: "串接 WebSocket 動畫通知，撰寫可複用表單組件，提高開發效率",
    techs: ["React", "GraphQL", "Apollo", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2020 — 2021",
    logo: quancomImg,
    company: "量算科技",
    role: "Frontend Engineer",
    cover: false,
    highlight: "主導引入 Storybook 統一全站 UI，建立多角色權限管理系統及完整共用元件庫",
    techs: ["React", "Redux", "Hooks", "styled-components", "Storybook"],
  },
  {
    period: "2019 — 2020",
    logo: lionImg,
    company: "雄獅資訊科技",
    role: "Frontend Engineer",
    cover: true,
    highlight: "開發共同多功能元件建置，參與 React Native 旅遊票券 App，完成票券細節頁",
    techs: ["React", "React Native", "TypeScript", "SCSS"],
  },
];

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <StyledTimeline ref={timelineRef}>
      <StyledLine />
      <StyledLineProgress inView={inView} />
      {experiences.map((item, i) => {
        const delay = 200 + i * 180;
        return (
          <StyledItem key={item.company} inView={inView} delay={delay}>
            <StyledNode>
              <StyledNodeLogo
                src={item.logo}
                alt={item.company}
                $cover={item.cover}
                width={item.cover ? 70 : 52}
                height={item.cover ? 70 : 52}
              />
            </StyledNode>
            <StyledCard>
              <StyledCardTop>
                <div>
                  <StyledCompany>{item.company}</StyledCompany>
                  <StyledRole>{item.role}</StyledRole>
                </div>
                <StyledPeriod>{item.period}</StyledPeriod>
              </StyledCardTop>
              <StyledHighlight>{item.highlight}</StyledHighlight>
              <StyledTechRow>
                {item.techs.map(t => <StyledTech key={t}>{t}</StyledTech>)}
              </StyledTechRow>
            </StyledCard>
          </StyledItem>
        );
      })}
    </StyledTimeline>
  );
};

/* ─── Styled ─── */

const NODE_SIZE = 70;
const NODE_SIZE_MOBILE = 56;

const StyledTimeline = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding-left: ${NODE_SIZE_MOBILE + 20}px;

  @media screen and (min-width: 600px) {
    padding-left: ${NODE_SIZE + 26}px;
  }
`;

const StyledLine = styled.div`
  position: absolute;
  top: ${NODE_SIZE_MOBILE / 2}px;
  bottom: ${NODE_SIZE_MOBILE / 2}px;
  left: ${NODE_SIZE_MOBILE / 2 - 1}px;
  width: 2px;
  background: rgba(241, 222, 198, 0.12);

  @media screen and (min-width: 600px) {
    top: ${NODE_SIZE / 2}px;
    bottom: ${NODE_SIZE / 2}px;
    left: ${NODE_SIZE / 2 - 1}px;
  }
`;

const StyledLineProgress = styled.div<{ inView: boolean }>`
  position: absolute;
  top: ${NODE_SIZE_MOBILE / 2}px;
  bottom: ${NODE_SIZE_MOBILE / 2}px;
  left: ${NODE_SIZE_MOBILE / 2 - 1}px;
  width: 2px;
  background: rgba(241, 222, 198, 0.55);
  transform-origin: top;
  transform: scaleY(${({ inView }) => (inView ? 1 : 0)});
  transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);

  @media screen and (min-width: 600px) {
    top: ${NODE_SIZE / 2}px;
    bottom: ${NODE_SIZE / 2}px;
    left: ${NODE_SIZE / 2 - 1}px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const StyledItem = styled.div<{ inView: boolean; delay: number }>`
  position: relative;
  padding-bottom: 36px;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: translateX(${({ inView }) => (inView ? 0 : -16)}px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: ${({ delay }) => delay}ms;

  &:last-child {
    padding-bottom: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
  }
`;

const StyledNode = styled.div`
  position: absolute;
  left: -${NODE_SIZE_MOBILE + 20}px;
  top: 0;
  width: ${NODE_SIZE_MOBILE}px;
  height: ${NODE_SIZE_MOBILE}px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(241, 222, 198, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  @media screen and (min-width: 600px) {
    left: -${NODE_SIZE + 26}px;
    width: ${NODE_SIZE}px;
    height: ${NODE_SIZE}px;
  }
`;

const StyledNodeLogo = styled(Image)<{ $cover?: boolean }>`
  object-fit: ${({ $cover }) => ($cover ? "cover" : "contain")};
`;

const StyledCard = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(241, 222, 198, 0.15);
  border-radius: 16px;
  padding: 20px 24px;
`;

const StyledCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 14px;
  gap: 12px;
  flex-wrap: wrap;
`;

const StyledCompany = styled.p`
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 700;
  color: rgba(241, 222, 198, 0.9);
  letter-spacing: 0.5px;
`;

const StyledRole = styled.p`
  margin: 0;
  font-size: 12px;
  color: rgba(241, 222, 198, 0.45);
  letter-spacing: 0.5px;
`;

const StyledPeriod = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: rgba(241, 222, 198, 0.4);
  white-space: nowrap;
`;

const StyledHighlight = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 1.8;
  color: rgba(241, 222, 198, 0.7);
  font-style: italic;
`;

const StyledTechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const StyledTech = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(241, 222, 198, 0.08);
  color: rgba(241, 222, 198, 0.65);
  border: 1px solid rgba(241, 222, 198, 0.15);
  white-space: nowrap;
  letter-spacing: 0.3px;
`;

export default Experience;
