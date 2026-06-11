'use client';

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import { Mail } from "./components/Icons";
import { theme } from "./core";
import IntroAnimation from "./components/IntroAnimation";

const NAV_ITEMS = [
  { label: "Portfolio",  href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
];

const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      {!introFinished && <IntroAnimation onFinish={() => setIntroFinished(true)} />}
      <StyledContainer>
        <Header scrolled={isScrolled} navItems={NAV_ITEMS} />

        <StyledHeroSection>
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
                <StyledLoveIllustration src="/love.jpeg" alt="love" />
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

        <StyledWaveDivider>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
            <path d="M0,0 C320,72 720,0 1080,48 C1260,72 1380,32 1440,16 L1440,0 Z" fill="#008080" />
          </svg>
        </StyledWaveDivider>

        <StyledLightSection>
          <StyledSection id="portfolio">
            <StyledSectionHeader>
              <StyledSectionLabel>Side Projects</StyledSectionLabel>
              <StyledSectionTitle>Portfolio</StyledSectionTitle>
            </StyledSectionHeader>
            <Profile />
          </StyledSection>
        </StyledLightSection>

        <StyledWaveBox bg={theme.mainTheme}>
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
            <path d="M0,0 C320,72 720,0 1080,48 C1260,72 1380,32 1440,16 L1440,0 Z" fill="var(--cream)" />
          </svg>
        </StyledWaveBox>

        <StyledDarkSection>
          <StyledSkillsDecoCircle size={320} bottom={-80} left={-60} />
          <StyledSkillsDecoCircle size={180} bottom={20} left={60} />
          <StyledSection id="experience">
            <StyledSectionHeader>
              <StyledSectionTitleLight>Experience</StyledSectionTitleLight>
            </StyledSectionHeader>
            <Experience />
          </StyledSection>
        </StyledDarkSection>

        <StyledWaveBox bg="var(--cream)">
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
            <path d="M0,0 C320,72 720,0 1080,48 C1260,72 1380,32 1440,16 L1440,0 Z" fill="#008080" />
          </svg>
        </StyledWaveBox>

        <StyledLightSection>
          <StyledSection id="skills">
            <StyledSectionHeader>
              <StyledSectionLabel>What I work with</StyledSectionLabel>
              <StyledSectionTitle>Skills</StyledSectionTitle>
            </StyledSectionHeader>
            <Skills />
          </StyledSection>
        </StyledLightSection>

        <Footer />
      </StyledContainer>
    </div>
  );
};

/* ─── Styled ─── */

const StyledContainer = styled.div`
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--cream);
`;

/* Hero */
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
  box-shadow: 0 0 0 6px rgba(241, 222, 198, 0.08), 0 12px 40px rgba(0,0,0,0.3);

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

const StyledSlogan = styled.p`
  margin: 0;
  font-family: 'Kiwi Maru', sans-serif;
  font-size: 15px;
  font-weight: 400;
  font-style: italic;
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

  &:hover { color: rgba(241, 222, 198, 0.9); }
`;

const StyledTagFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-top: 4px;

  @media screen and (min-width: 680px) { justify-content: flex-start; }
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

/* Wave */
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

/* Main */
const StyledMainContent = styled.main`
  flex: 1;
  background: var(--cream);
  padding: 0 24px 64px;

  @media screen and (max-width: 679px) {
    padding: 0 16px 48px;
  }
`;

const StyledSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 64px 0 48px;

  @media screen and (max-width: 679px) {
    padding: 48px 0 32px;
  }
`;

const StyledSectionHeader = styled.div`
  margin-bottom: 32px;
`;

const StyledSectionLabel = styled.p`
  margin: 0 0 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.mainTheme};
  opacity: 0.7;
`;

const StyledSectionTitle = styled.h2`
  margin: 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 36px;
  font-weight: 700;
  color: var(--content-text);
  letter-spacing: 0.5px;
  line-height: 1.1;
`;

const StyledWaveBox = styled.div<{ bg: string }>`
  background: ${({ bg }) => bg};
  margin-top: -1px;
  line-height: 0;

  svg {
    display: block;
    width: 100%;
    height: 72px;
  }
`;

/* Light / Dark sections */
const StyledLightSection = styled.div`
  background: var(--cream);
  padding: 0 24px;

  @media screen and (max-width: 679px) { padding: 0 16px; }
`;

const StyledDarkSection = styled.div`
  background: ${theme.mainTheme};
  position: relative;
  overflow: hidden;
  padding: 0 24px 16px;

  @media screen and (max-width: 679px) { padding: 0 16px 16px; }
`;

const StyledSkillsDecoCircle = styled.div<{ size: number; bottom: number; left: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  bottom: ${({ bottom }) => bottom}px;
  left: ${({ left }) => left}px;
  border-radius: 50%;
  border: 1px solid rgba(241, 222, 198, 0.08);
  pointer-events: none;
`;


const StyledSectionLabelLight = styled.p`
  margin: 0 0 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(241, 222, 198, 0.45);
`;

const StyledSectionTitleLight = styled.h2`
  margin: 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 36px;
  font-weight: 700;
  color: ${theme.lightFont};
  letter-spacing: 0.5px;
  line-height: 1.1;
`;

export default App;
