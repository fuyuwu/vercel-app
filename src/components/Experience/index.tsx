'use client';

import React, { useState, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../core";

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
    highlight: "優化彈窗流程與共用搜尋機制，引入 AI 輔助開發，效率提升 40%",
    techs: ["Vue 3", "TypeScript", "Vite", "Tailwind CSS", "Vant"],
  },
  {
    period: "2021 — 2023",
    logo: innoImg,
    company: "伊諾科技",
    role: "Frontend Engineer",
    cover: false,
    highlight: "串接 WebSocket 動畫通知，產出跨業主可複用表單元件，降低重工成本",
    techs: ["React", "GraphQL", "Apollo", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2020 — 2021",
    logo: quancomImg,
    company: "量算科技",
    role: "Frontend Engineer",
    cover: false,
    highlight: "建立多角色權限管理系統及完整共用元件庫，統一全站 UI 一致性",
    techs: ["React", "Redux", "Hooks", "styled-components", "Storybook"],
  },
  {
    period: "2019 — 2020",
    logo: lionImg,
    company: "雄獅資訊科技",
    role: "Frontend Engineer",
    cover: true,
    highlight: "參與 React Native 旅遊票券 App，完成票券細節頁與共通元件建置",
    techs: ["React", "React Native", "TypeScript", "SCSS"],
  },
];

const Experience: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const logoRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [arrowLeft, setArrowLeft] = useState(0);

  const handleSelect = (i: number, el: HTMLButtonElement | null) => {
    if (selected === i) {
      setSelected(null);
      return;
    }
    setSelected(i);
    if (el) {
      const rect = el.getBoundingClientRect();
      const parent = el.closest('[data-logo-row]') as HTMLElement;
      const parentRect = parent?.getBoundingClientRect();
      setArrowLeft(rect.left - (parentRect?.left ?? 0) + rect.width / 2);
    }
  };

  const exp = selected !== null ? experiences[selected] : null;

  return (
    <StyledWrap>
      {/* Logo 橫排 */}
      <StyledLogoRow data-logo-row>
        {experiences.map((item, i) => (
          <StyledLogoBtn
            key={i}
            ref={el => { logoRefs.current[i] = el; }}
            active={selected === i}
            onClick={() => handleSelect(i, logoRefs.current[i])}
          >
            <StyledLogo
              src={typeof item.logo === 'string' ? item.logo : item.logo.src}
              alt={item.company}
              active={selected === i}
              cover={item.cover}
            />
          </StyledLogoBtn>
        ))}
      </StyledLogoRow>

      {/* 對話框內容 */}
      <StyledBubbleWrap isOpen={selected !== null}>
        <div>
          {exp && (
            <>
              <StyledArrow left={arrowLeft} />
              <StyledBubble>
                <StyledBubbleTop>
                  <div>
                    <StyledCompany>{exp.company}</StyledCompany>
                    <StyledRole>{exp.role}</StyledRole>
                  </div>
                  <StyledPeriod>{exp.period}</StyledPeriod>
                </StyledBubbleTop>
                <StyledHighlight>{exp.highlight}</StyledHighlight>
                <StyledTechRow>
                  {exp.techs.map(t => <StyledTech key={t}>{t}</StyledTech>)}
                </StyledTechRow>
              </StyledBubble>
            </>
          )}
        </div>
      </StyledBubbleWrap>
    </StyledWrap>
  );
};

/* ─── Styled ─── */

const StyledWrap = styled.div`
  width: 100%;
`;

const StyledLogoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  padding: 8px 0;
`;

const StyledLogoBtn = styled.button<{ active: boolean }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${({ active }) => active ? 'rgba(241,222,198,0.15)' : 'rgba(0,0,0,0.15)'};
  border: 2px solid ${({ active }) => active ? 'rgba(241,222,198,0.5)' : 'rgba(241,222,198,0.1)'};
  box-shadow: ${({ active }) => active ? '0 0 0 4px rgba(241,222,198,0.1)' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  transform: ${({ active }) => active ? 'translateY(-6px)' : 'none'};
  padding: 0;
  overflow: hidden;

  &:hover {
    background: rgba(241,222,198,0.12);
    border-color: rgba(241,222,198,0.3);
    transform: translateY(-3px);
  }
`;

const StyledLogo = styled.img<{ active: boolean; cover?: boolean }>`
  width: ${({ cover }) => cover ? '100%' : '75%'};
  height: ${({ cover }) => cover ? '100%' : '75%'};
  object-fit: ${({ cover }) => cover ? 'cover' : 'contain'};
  opacity: ${({ active }) => active ? 1 : 0.65};
  transition: opacity 0.25s ease;
`;

const StyledBubbleWrap = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ isOpen }) => isOpen ? '1fr' : '0fr'};
  transition: grid-template-rows 0.35s ease;
  margin-top: 8px;

  & > div {
    overflow: hidden;
  }
`;

const StyledArrow = styled.div<{ left: number }>`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid rgba(241,222,198,0.12);
  margin-left: ${({ left }) => left - 10}px;
  margin-bottom: -1px;
  transition: margin-left 0.3s ease;
`;

const StyledBubble = styled.div`
  background: rgba(0,0,0,0.2);
  border: 1px solid rgba(241,222,198,0.15);
  border-radius: 16px;
  padding: 24px 28px;
`;

const StyledBubbleTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 12px;
`;

const StyledCompany = styled.p`
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 700;
  color: rgba(241,222,198,0.9);
  letter-spacing: 0.5px;
`;

const StyledRole = styled.p`
  margin: 0;
  font-size: 12px;
  color: rgba(241,222,198,0.45);
  letter-spacing: 0.5px;
`;

const StyledPeriod = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: rgba(241,222,198,0.4);
  white-space: nowrap;
`;

const StyledHighlight = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 1.8;
  color: rgba(241,222,198,0.7);
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
  background: rgba(241,222,198,0.08);
  color: rgba(241,222,198,0.65);
  border: 1px solid rgba(241,222,198,0.15);
  white-space: nowrap;
  letter-spacing: 0.3px;
`;

export default Experience;
