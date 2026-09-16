'use client';

import React from "react";
import styled from "styled-components";

/* ── QA Hub Featured Card ── */

const FEATURED_PROJECT = {
  title: "QA Hub",
  tagline: "Frontend interview question bank & practice tool",
  desc: "自己在用的前端面試題庫工具。Express 5 + Prisma + Zod 後端，Vue 3 前端，支援瀏覽篩選、洗牌抽卡練習、複習進度追蹤，題庫管理受 API Key 保護。",
  features: [
    "分類／難度／標籤篩選，關鍵字搜尋題目與答案",
    "洗牌抽卡練習模式，記錄複習狀態與練習次數",
    "API Key 保護的題庫 CRUD 管理",
  ],
  techs: ["Vue 3", "Express 5", "Prisma", "Zod", "TypeScript", "SQLite"],
  liveUrl: "https://web-production-88c3f.up.railway.app",
  githubUrl: "https://github.com/fuyuwu/qa-hub",
  accent: "#6366f1",
};

/* ── Component ── */

const Profile: React.FC = () => {
  return (
    <StyledWrap>

      {/* ── Featured Project: QA Hub ── */}
      <StyledFeaturedCard>
        <StyledFeaturedLeft>
          <StyledFeaturedBadge>Featured Project</StyledFeaturedBadge>
          <StyledFeaturedTitle>{FEATURED_PROJECT.title}</StyledFeaturedTitle>
          <StyledFeaturedTagline>{FEATURED_PROJECT.tagline}</StyledFeaturedTagline>
          <StyledFeaturedDesc>{FEATURED_PROJECT.desc}</StyledFeaturedDesc>
          <StyledFeatureList>
            {FEATURED_PROJECT.features.map(f => (
              <StyledFeatureItem key={f}>
                <StyledFeatureDot />
                {f}
              </StyledFeatureItem>
            ))}
          </StyledFeatureList>
          <StyledFeaturedTechRow>
            {FEATURED_PROJECT.techs.map(t => (
              <StyledFeaturedTech key={t} accent={FEATURED_PROJECT.accent}>{t}</StyledFeaturedTech>
            ))}
          </StyledFeaturedTechRow>
          <StyledFeaturedActions>
            {/* <StyledLiveBtn href={FEATURED_PROJECT.liveUrl} target="_blank" rel="noreferrer" accent={FEATURED_PROJECT.accent}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </StyledLiveBtn> */}
            <StyledCodeBtn href={FEATURED_PROJECT.githubUrl} target="_blank" rel="noreferrer" accent={FEATURED_PROJECT.accent}>
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              View Code
            </StyledCodeBtn>
          </StyledFeaturedActions>
        </StyledFeaturedLeft>
        <StyledFeaturedPreview>
          <StyledIframe
            src={FEATURED_PROJECT.liveUrl}
            title={FEATURED_PROJECT.title}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </StyledFeaturedPreview>
      </StyledFeaturedCard>

    </StyledWrap>
  );
};

/* ── Styled ── */

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

/* ── Featured Card ── */

const StyledFeaturedCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--cream-border);
  box-shadow: 0 4px 32px rgba(26, 42, 64, 0.1);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledFeaturedLeft = styled.div`
  padding: 40px 36px;
  background: var(--cream-card);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledFeaturedBadge = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #42b883;
`;

const StyledFeaturedTitle = styled.h3`
  margin: 0;
  font-family: var(--font-playfair), Georgia, serif;
  font-size: 36px;
  font-weight: 700;
  color: var(--content-text);
  line-height: 1.1;
`;

const StyledFeaturedTagline = styled.p`
  margin: 0;
  font-size: 14px;
  font-style: italic;
  color: var(--content-text-sub);
  letter-spacing: 0.3px;
`;

const StyledFeaturedDesc = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.8;
  color: var(--content-text-sub);
`;

const StyledFeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledFeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--content-text);
  letter-spacing: 0.3px;
`;

const StyledFeatureDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #42b883;
  flex-shrink: 0;
`;

const StyledFeaturedTechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const StyledFeaturedTech = styled.span<{ accent: string }>`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  background: ${({ accent }) => accent}12;
  color: ${({ accent }) => accent};
  border: 1px solid ${({ accent }) => accent}30;
  white-space: nowrap;
`;

const StyledFeaturedActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 4px;
`;

const StyledLiveBtn = styled.a<{ accent: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 10px;
  background: ${({ accent }) => accent};
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: opacity 0.2s;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover { opacity: 0.85; }
`;

const StyledCodeBtn = styled.a<{ accent: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid ${({ accent }) => accent}50;
  color: var(--content-text);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: border-color 0.2s, background 0.2s;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    background: ${({ accent }) => accent}10;
    border-color: ${({ accent }) => accent};
  }
`;

const StyledFeaturedPreview = styled.div`
  background: #f0f0f0;
  position: relative;
  min-height: 400px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    min-height: 300px;
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: none;
  display: block;
`;

export default Profile;
