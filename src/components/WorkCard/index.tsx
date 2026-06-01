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
        {navCards.map((card) => {
          const hasDesc = !!card.description;
          return (
            <StyledCard
              key={card.tabId}
              accent={card.accent}
              hasDesc={hasDesc}
              onClick={() => dispatch(setCurrentTab(card.tabId))}
            >
              <StyledIconWrapper accent={card.accent} hasDesc={hasDesc}>
                {card.icon}
              </StyledIconWrapper>
              <StyledCardLabel accent={card.accent}>{card.label}</StyledCardLabel>
              {hasDesc && <StyledCardDesc>{card.description}</StyledCardDesc>}
              <StyledArrow accent={card.accent}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </StyledArrow>
            </StyledCard>
          );
        })}
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
  font-size: 24px;
  font-weight: 700;
  color: ${theme.lightFont};
  margin: 0 0 8px;
  letter-spacing: 1px;
`;

const StyledSubheading = styled.p`
  font-size: 14px;
  color: rgba(241, 222, 198, 0.55);
  margin: 0 0 32px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledCard = styled.div<{ accent: string; hasDesc: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${({ hasDesc }) => hasDesc ? "flex-start" : "center"};
  justify-content: ${({ hasDesc }) => hasDesc ? "flex-start" : "center"};
  gap: 10px;
  padding: 28px 24px 24px;
  background: rgba(0, 0, 0, 0.14);
  border-radius: 16px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  text-align: ${({ hasDesc }) => hasDesc ? "left" : "center"};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ accent }) => accent};
    border-radius: 14px 14px 0 0;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    background: ${({ accent }) => accent};
    border-color: transparent;
  }
`;

const StyledIconWrapper = styled.div<{ accent: string; hasDesc: boolean }>`
  width: ${({ hasDesc }) => hasDesc ? "48px" : "72px"};
  height: ${({ hasDesc }) => hasDesc ? "48px" : "72px"};
  border-radius: ${({ hasDesc }) => hasDesc ? "12px" : "20px"};
  background: ${({ accent }) => accent}28;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ accent }) => accent};
  transition: background 0.25s, color 0.25s;

  svg {
    width: ${({ hasDesc }) => hasDesc ? "26px" : "38px"};
    height: ${({ hasDesc }) => hasDesc ? "26px" : "38px"};
  }

  ${StyledCard}:hover & {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
`;

const StyledCardLabel = styled.span<{ accent: string }>`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: ${({ accent }) => accent};
  transition: color 0.25s;

  ${StyledCard}:hover & {
    color: rgba(255, 255, 255, 0.9);
  }
`;


const StyledCardDesc = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: rgba(241, 222, 198, 0.65);
  margin: 0;
  flex: 1;
  transition: color 0.25s;

  ${StyledCard}:hover & {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const StyledArrow = styled.div<{ accent: string }>`
  align-self: flex-end;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ accent }) => accent}18;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ accent }) => accent};
  transition: background 0.2s, transform 0.2s;

  svg {
    width: 18px;
    height: 18px;
  }

  ${StyledCard}:hover & {
    background: ${({ accent }) => accent};
    color: white;
    transform: translateX(3px);
  }
`;

export default WorkCard;
