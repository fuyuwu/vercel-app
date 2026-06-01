'use client';

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TabContentRenderer from "./components/TabContentRenderer";
import { Mail, CellPhone } from "./components/Icons";

import { theme } from "./core";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setCurrentTab } from "./store/slices/tabSlice";

const TAB_ICONS: Record<string, React.ReactNode> = {
  tab01: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  tab02: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="8" y1="14" x2="16" y2="14" />
    </svg>
  ),
  tab03: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="15" y1="9" x2="9" y2="15" />
    </svg>
  ),
  tab04: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
};

const App: React.FC = () => {
  const tabs = useAppSelector(state => state.tab.tabs);
  const currentTabID = useAppSelector(state => state.tab.currentTabId);
  const dispatch = useAppDispatch();

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ overflowX: "hidden", maxWidth: "100%" }}>
      <StyledContainer>
        <Header title="FuFu's Blog" scrolled={isScrolled}>
          {tabs.map(({ id, name }) => (
            <StyledTabBtn
              key={id}
              active={id === currentTabID}
              onClick={() => dispatch(setCurrentTab(id))}
              title={name}
            >
              {TAB_ICONS[id]}
              <StyledActiveDot active={id === currentTabID} />
            </StyledTabBtn>
          ))}
        </Header>

        <StyledContent>
          {/* ── Hero ── */}
          <StyledHero className="animate-left">
            <StyledAvatarWrapper>
              <StyledAvatar src="/avatar.jpg" alt="FuFu" />
            </StyledAvatarWrapper>

            <StyledHeroInfo>
              <StyledName>FuFu Wu</StyledName>
              <StyledRole>Front-end Engineer</StyledRole>

              <StyledContact>
                <StyledContactLink href="callto:+886988611937" rel="noreferrer noopener">
                  <CellPhone width={18} height={18} fill={theme.darkFont} />
                  +886 988611937
                </StyledContactLink>
                <StyledContactLink href="mailto:fuyuwu041000@gmail.com" rel="noreferrer noopener">
                  <Mail width={18} height={18} fill={theme.darkFont} />
                  fuyuwu041000@gmail.com
                </StyledContactLink>
              </StyledContact>

              <StyledTagFlex>
                <StyledTag># 好奇心旺盛</StyledTag>
                <StyledTag># 擅長協作開發</StyledTag>
                <StyledTag># 善於傾聽及溝通</StyledTag>
              </StyledTagFlex>
            </StyledHeroInfo>
          </StyledHero>

          <StyledDivider />

          <TabContentRenderer />
        </StyledContent>

        <Footer />
      </StyledContainer>
    </div>
  );
};

/* ─── Styled Components ─── */

const StyledContainer = styled.div`
  background: ${theme.mainTheme};
  border-radius: 10px;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledContent = styled.div`
  padding: 72px 16px 16px;

  @media screen and (max-width: 679px) {
    padding-top: 56px;
  }
  flex: 1;
`;

/* Hero */
const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 8px 0 24px;

  @media screen and (min-width: 680px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
`;

const StyledAvatarWrapper = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${theme.lightFont};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 680px) {
    width: 140px;
    height: 140px;
  }
`;

const StyledAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

const StyledHeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 680px) {
    align-items: flex-start;
  }
`;

const StyledName = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: ${theme.darkFont};
  letter-spacing: 1px;
`;

const StyledRole = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: ${theme.darkFont};
  opacity: 0.75;
  letter-spacing: 0.5px;
`;

const StyledContact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px 16px;

  @media screen and (min-width: 680px) {
    justify-content: flex-start;
  }
`;

const StyledContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  font-size: 13px;
  color: ${theme.darkFont};
  padding: 4px 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.65;
  }
`;

const StyledTagFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-top: 4px;

  @media screen and (min-width: 680px) {
    justify-content: flex-start;
  }
`;

const StyledTag = styled.span`
  display: inline-block;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: rgba(26, 42, 64, 0.12);
  color: ${theme.darkFont};
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const StyledDivider = styled.div`
  height: 1px;
  border-bottom: dashed;
  border-color: ${theme.darkFont};
  border-width: 2px;
  opacity: 0.3;
  margin: 0 0 8px;
`;

/* Tab icons */

const StyledTabBtn = styled.button<{ active: boolean }>`
  position: relative;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 12px;
  background: ${({ active }) => active ? "rgba(255,255,255,0.2)" : "transparent"};
  color: ${theme.lightFont};
  opacity: ${({ active }) => active ? 1 : 0.45};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
  transition: background 0.2s, opacity 0.2s;

  svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const StyledActiveDot = styled.span<{ active: boolean }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${theme.lightFont};
  opacity: ${({ active }) => active ? 1 : 0};
  transition: opacity 0.2s;
`;

export default App;
