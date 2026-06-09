'use client';

import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../store/hooks";
import { setCurrentTab } from "../../store/slices/tabSlice";
import { theme } from "../../core";

const navCards = [
  {
    tabId: "tab02",
    label: "EXPERIENCE",
    description: "",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="8" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#1A2A40",
  },
  {
    tabId: "tab03",
    label: "SKILLS",
    description: "Vue / React，TypeScript、狀態管理、API 串接，以及 UI/UX 設計流程。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#008080",
  },
  {
    tabId: "tab04",
    label: "PORTFOLIO",
    description: "天氣元件、Switch 互動元件等 Side Project 展示，以 React Hooks、TypeScript 實作。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    accent: "#FF8343",
  },
];

const WorkCard: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledWrapper>
      <StyledHeading>歡迎來到我的作品集</StyledHeading>
      <StyledSubheading>選擇一個區塊，深入了解我的經歷與作品</StyledSubheading>

      <StyledGrid>
        {navCards.map((card) => (
          <StyledCircleCard
            key={card.tabId}
            accent={card.accent}
            onClick={() => dispatch(setCurrentTab(card.tabId))}
          >
            <StyledCircle accent={card.accent}>
              {card.icon}
            </StyledCircle>
            <StyledCardLabel accent={card.accent}>{card.label}</StyledCardLabel>
          </StyledCircleCard>
        ))}
      </StyledGrid>
    </StyledWrapper>
  );
};

/* ─── Styled Components ─── */

const StyledWrapper = styled.div`
  padding: 24px 8px 32px;
  text-align: center;
`;

const StyledHeading = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: var(--content-text);
  margin: 0 0 8px;
  letter-spacing: 0.5px;
`;

const StyledSubheading = styled.p`
  font-size: 14px;
  color: var(--content-text-sub);
  margin: 0 0 32px;
`;

const StyledGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 56px;
  flex-wrap: wrap;
`;

const StyledCircleCard = styled.div<{ accent: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  cursor: pointer;

  &:hover > div {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px ${({ accent }) => accent}28;
    border-color: ${({ accent }) => accent}50;
  }

  &:hover > span {
    color: ${({ accent }) => accent};
  }
`;

const StyledCircle = styled.div<{ accent: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--cream-card);
  border: 2px solid var(--cream-border);
  box-shadow: 0 4px 16px rgba(26, 42, 64, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ accent }) => accent};
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  svg {
    width: 34px;
    height: 34px;
  }
`;

const StyledCardLabel = styled.span<{ accent: string }>`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--content-text-sub);
  transition: color 0.3s ease;
`;

export default WorkCard;
