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
import IntroAnimation from "./components/IntroAnimation";

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

  const [introFinished, setIntroFinished] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ overflowX: "hidden", maxWidth: "100%" }}>
      {!introFinished && <IntroAnimation onFinish={() => setIntroFinished(true)} />}
      <StyledContainer>
        <Header title="" scrolled={isScrolled}>
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

        {/* ── Hero Section (dark teal) ── */}
        <StyledHeroSection>
          {/* 裝飾幾何 */}
          <StyledDecoCircle size={360} top={-120} right={-80} opacity={0.06} />
          <StyledDecoCircle size={220} top={-40} right={80} opacity={0.04} />
          <StyledDecoArc />
          <StyledHero>
            <StyledAvatarWrapper>
              <StyledAvatar src="/avatar.jpg" alt="FuFu" />
            </StyledAvatarWrapper>

            <StyledHeroInfo>
              <StyledRoleBadge>Frontend Engineer</StyledRoleBadge>
              <StyledName>FuFu Wu</StyledName>
              <StyledAccentLine />
              <StyledSloganRow>
                <StyledLoveIllustration src="/love.jpeg" alt="love illustration" />
                <StyledSlogan>Where ideas become interfaces.</StyledSlogan>
              </StyledSloganRow>
              <StyledContactLink href="mailto:fuyuwu041000@gmail.com" rel="noreferrer noopener">
                <Mail width={14} height={14} fill="rgba(241,222,198,0.6)" />
                fuyuwu041000@gmail.com
              </StyledContactLink>
              <StyledTagFlex>
                <StyledTag># 好奇心旺盛</StyledTag>
                <StyledTag># 擅長協作開發</StyledTag>
                <StyledTag># 善於傾聽及溝通</StyledTag>
              </StyledTagFlex>
            </StyledHeroInfo>
          </StyledHero>
        </StyledHeroSection>

        {/* ── Wave divider ── */}
        <StyledWaveDivider>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C320,72 720,0 1080,48 C1260,72 1380,32 1440,16 L1440,0 Z" fill="#008080" />
          </svg>
        </StyledWaveDivider>

        {/* ── Content Section (light cream) ── */}
        <StyledMainContent>
          <TabContentRenderer />
        </StyledMainContent>

        <Footer />
      </StyledContainer>
    </div>
  );
};

/* ─── Styled Components ─── */

const StyledContainer = styled.div`
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--cream);
`;

/* ── Hero Section ── */
const StyledHeroSection = styled.div`
  background: ${theme.mainTheme};
  padding: 72px 24px 56px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 679px) {
    padding-top: 60px;
    padding-bottom: 48px;
  }
`;

const StyledDecoCircle = styled.div<{ size: number; top: number; right: number; opacity: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  border-radius: 50%;
  border: 1.5px solid rgba(241, 222, 198, ${({ opacity }) => opacity * 10});
  pointer-events: none;
`;

const StyledDecoArc = styled.div`
  position: absolute;
  bottom: 40px;
  left: -60px;
  width: 200px;
  height: 100px;
  border-radius: 0 0 100px 100px;
  border: 2px solid #C8841A;
  border-top: none;
  opacity: 0.2;
  pointer-events: none;
`;

const StyledWaveDivider = styled.div`
  background: var(--cream);
  margin-top: -1px;
  line-height: 0;

  svg {
    display: block;
    width: 100%;
    height: 72px;
  }
`;

const StyledHero = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media screen and (min-width: 680px) {
    flex-direction: row;
    align-items: center;
    gap: 44px;
  }
`;

const StyledAvatarWrapper = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(241, 222, 198, 0.4);
  box-shadow:
    0 0 0 6px rgba(241, 222, 198, 0.08),
    0 12px 40px rgba(0, 0, 0, 0.3);

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
  gap: 10px;

  @media screen and (min-width: 680px) {
    align-items: flex-start;
  }
`;

const StyledRoleBadge = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(241, 222, 198, 0.5);
`;

const StyledName = styled.h2`
  margin: 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 44px;
  font-weight: 700;
  color: ${theme.lightFont};
  letter-spacing: 1px;
  line-height: 1.05;
`;

const StyledAccentLine = styled.div`
  width: 32px;
  height: 2px;
  border-radius: 2px;
  background: rgba(241, 222, 198, 0.35);
  align-self: flex-start;

  @media screen and (max-width: 679px) {
    align-self: center;
  }
`;

const StyledSlogan = styled.p`
  margin: 0;
  font-family: 'Kiwi Maru', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: rgba(241, 222, 198, 0.75);
  letter-spacing: 0.3px;
  line-height: 1.5;
`;

const StyledContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  font-size: 12px;
  color: rgba(241, 222, 198, 0.5);
  letter-spacing: 0.4px;
  transition: color 0.2s;

  &:hover {
    color: rgba(241, 222, 198, 0.9);
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
  font-size: 11px;
  padding: 3px 12px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(241, 222, 198, 0.18);
  color: rgba(241, 222, 198, 0.6);
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const StyledSloganRow = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLoveIllustration = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  opacity: 0.55;
  mix-blend-mode: screen;
  filter: invert(1) brightness(0.9);
  pointer-events: none;
  flex-shrink: 0;
`;

/* ── Main Content Section ── */
const StyledMainContent = styled.main`
  flex: 1;
  background: var(--cream);
  padding: 32px 24px 48px;

  @media screen and (max-width: 679px) {
    padding: 24px 16px 40px;
  }
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
