'use client';

import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../core";
import Switch from "../Switch";
import Weather from "../Weather";
import Typeing from "../Typeing";

/* ── Types ── */

type Framework = "React" | "Vue";
type ProjectGroup = "Components" | "Projects";

interface Project {
  id: string;
  framework: Framework;
  group: ProjectGroup;
  title: string;
  desc: string;
  techs: string[];
  accent: string;
  type: "demo" | "iframe";
  renderDemo?: (accent: string) => React.ReactNode;
  iframeUrl?: string;
}

/* ── Switch sub-demos ── */

const ControlBtn: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Switch onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />;
};

const DisabledDemo: React.FC<{ accent: string }> = ({ accent }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledDemoRow>
      <Switch
        text={["關", "開"]}
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        isDisabled={isDisabled}
      />
      <StyledToggleBtn accent={accent} onClick={() => setIsDisabled((v) => !v)}>
        {isDisabled ? "enable" : "disable"}
      </StyledToggleBtn>
    </StyledDemoRow>
  );
};

interface EvoNode { species: { name: string; url: string }; evolves_to: EvoNode[] }
interface EvoEntry { name: string; id: number }

const idFromUrl = (url: string) =>
  parseInt(url.split("/").filter(Boolean).pop() ?? "0");

const AsyncDemo: React.FC<{ accent: string }> = ({ accent }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [chain, setChain] = useState<EvoEntry[]>([]);
  const [isError, setIsError] = useState(false);

  const fetchData = () => {
    if (isLoading) return;
    setIsLoading(true);
    setChain([]);
    setIsError(false);
    fetch("https://pokeapi.co/api/v2/evolution-chain/1/")
      .then((res) => res.json())
      .then((data) => {
        const entries: EvoEntry[] = [];
        let node: EvoNode = data.chain;
        while (node) {
          entries.push({ name: node.species.name, id: idFromUrl(node.species.url) });
          node = node.evolves_to[0];
        }
        setTimeout(() => {
          setIsLoading(false);
          setChain(entries);
        }, 1500);
      })
      .catch(() => setTimeout(() => {
        setIsLoading(false);
        setIsError(true);
      }, 3000));
  };

  return (
    <StyledAsyncWrap>
      <StyledAsyncTop>
        <Switch onClick={fetchData} isLoading={isLoading} isOpen={chain.length > 0} isDisabled={isLoading} />
        <StyledToggleBtn accent={accent} onClick={fetchData} disabled={isLoading}>
          {isLoading ? "fetching…" : "Call API"}
        </StyledToggleBtn>
      </StyledAsyncTop>
      {(chain.length > 0 || isError) && (
        <StyledResultBox accent={accent}>
          {isError
            ? <StyledResultErr>fetch 失敗</StyledResultErr>
            : chain.map((entry, i) => (
                <StyledResultItem key={entry.name} accent={accent}>
                  <StyledResultIndex accent={accent}>{i + 1}</StyledResultIndex>
                  <StyledPokeSprite
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entry.id}.png`}
                    alt={entry.name}
                  />
                  {entry.name}
                </StyledResultItem>
              ))
          }
        </StyledResultBox>
      )}
    </StyledAsyncWrap>
  );
};

const TypingDemo: React.FC<{ accent: string }> = ({ accent }) => {
  const [input, setInput] = useState("");

  return (
    <StyledTypingWrap>
      <StyledTypingRow>
        <StyledTypingLabel accent={accent}>Auto</StyledTypingLabel>
        <Typeing text="おはようございます！" speed={100} />
      </StyledTypingRow>

      <StyledTypingDivider accent={accent} />

      <StyledTypingRow>
        <StyledTypingLabel accent={accent}>Custom</StyledTypingLabel>
        <StyledTypingInlineInput
          accent={accent}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="輸入文字…"
          maxLength={60}
        />
      </StyledTypingRow>
    </StyledTypingWrap>
  );
};

const PROJECTS: Project[] = [
  {
    id: "weather",
    framework: "React",
    group: "Components",
    title: "Weather Widget",
    desc: "串接中央氣象局開放資料 API，依使用者 IP 定位自動帶入城市，可手動切換縣市，即時顯示溫度與天氣狀態。",
    techs: ["React", "Hooks", "TypeScript", "styled-components", "CWB API", "Geolocation"],
    accent: "#0077B6",
    type: "demo",
    renderDemo: () => <Weather />,
  },
  {
    id: "switch",
    framework: "React",
    group: "Components",
    title: "Switch Component",
    desc: "可組合的 Switch 元件，封裝三種使用情境：基本開關、disabled 狀態外部控制、非同步 loading（串接 PokeAPI 示範）。",
    techs: ["React", "Hooks", "TypeScript", "styled-components", "PokeAPI"],
    accent: "#087ea4",
    type: "demo",
    renderDemo: (accent) => (
      <StyledSwitchGrid>
        <StyledSwitchItem accent={accent}>
          <StyledDemoLabel>Default</StyledDemoLabel>
          <ControlBtn />
        </StyledSwitchItem>
        <StyledSwitchItem accent={accent}>
          <StyledDemoLabel>Disabled Control</StyledDemoLabel>
          <DisabledDemo accent={accent} />
        </StyledSwitchItem>
        <StyledSwitchItem accent={accent}>
          <StyledDemoLabel>Async fetch</StyledDemoLabel>
          <AsyncDemo accent={accent} />
        </StyledSwitchItem>
      </StyledSwitchGrid>
    ),
  },
  {
    id: "typing",
    framework: "React",
    group: "Components",
    title: "Typing Animation",
    desc: "Typing Writer Animation",
    techs: ["React", "Hooks", "TypeScript", "styled-components"],
    accent: "#0077B6",
    type: "demo",
    renderDemo: (accent) => <TypingDemo accent={accent} />,
  },
  {
    id: "vue-portfolio",
    framework: "Vue",
    group: "Projects",
    title: "GutCheck",
    desc: "以 Vue 3 + Composition API + TypeScript 建構的管理體重及熱量APP，支援 RWD 響應式設計。",
    techs: ["Vue 3", "Composition API", "TypeScript", "Vite", "Pinia", "Tailwind CSS"],
    accent: "#42b883",
    type: "iframe",
    iframeUrl: "https://gutcheck-fu.vercel.app",
  },
];

/* ── Tab config ── */

const TABS: { id: Framework; label: string; color: string }[] = [
  { id: "React", label: "React", color: "#087ea4" },
  { id: "Vue",   label: "Vue",   color: "#42b883" },
];

const GROUPS: ProjectGroup[] = ["Components", "Projects"];

/* ── GutCheck Featured Card ── */

const GUTCHECK = {
  title: "GutCheck",
  tagline: "Personal health tracker for calories & weight",
  desc: "以 Vue 3 + Composition API 建構的健康管理 App，記錄每日熱量攝取、追蹤體重趨勢，支援 RWD 全裝置適配。",
  features: [
    "每日熱量攝取記錄與目標設定",
    "體重趨勢視覺化圖表",
    "食物資料庫搜尋與快速新增",
  ],
  techs: ["Vue 3", "Composition API", "TypeScript", "Vite", "Pinia", "Tailwind CSS"],
  liveUrl: "https://gutcheck-fu.vercel.app",
  accent: "#42b883",
};

/* ── Component ── */

const Profile: React.FC = () => {
  const [activeFramework, setActiveFramework] = useState<Framework>("React");
  const activeColor = TABS.find((t) => t.id === activeFramework)!.color;
  const components = PROJECTS.filter((p) => p.framework === "React" && p.group === "Components");

  return (
    <StyledWrap>

      {/* ── Featured Project: GutCheck ── */}
      <StyledFeaturedCard>
        <StyledFeaturedLeft>
          <StyledFeaturedBadge>Featured Project</StyledFeaturedBadge>
          <StyledFeaturedTitle>{GUTCHECK.title}</StyledFeaturedTitle>
          <StyledFeaturedTagline>{GUTCHECK.tagline}</StyledFeaturedTagline>
          <StyledFeaturedDesc>{GUTCHECK.desc}</StyledFeaturedDesc>
          <StyledFeatureList>
            {GUTCHECK.features.map(f => (
              <StyledFeatureItem key={f}>
                <StyledFeatureDot />
                {f}
              </StyledFeatureItem>
            ))}
          </StyledFeatureList>
          <StyledFeaturedTechRow>
            {GUTCHECK.techs.map(t => (
              <StyledFeaturedTech key={t} accent={GUTCHECK.accent}>{t}</StyledFeaturedTech>
            ))}
          </StyledFeaturedTechRow>
          <StyledFeaturedActions>
            <StyledLiveBtn href={GUTCHECK.liveUrl} target="_blank" rel="noreferrer" accent={GUTCHECK.accent}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </StyledLiveBtn>
          </StyledFeaturedActions>
        </StyledFeaturedLeft>
        <StyledFeaturedPreview>
          <StyledIframe
            src={GUTCHECK.liveUrl}
            title="GutCheck"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </StyledFeaturedPreview>
      </StyledFeaturedCard>

      {/* ── Component Library ── */}
      <StyledComponentSection>
        <StyledSectionLabel color="#087ea4">Component Library</StyledSectionLabel>
        <StyledTabRow>
          {TABS.filter(t => t.id === "React").map((tab) => (
            <StyledTab key={tab.id} active color={tab.color}>{tab.label}</StyledTab>
          ))}
        </StyledTabRow>
        <StyledGrid>
          {components.map((p) => (
            <StyledCard key={p.id} accent={p.accent} wide={false}>
              <StyledCardTop>
                <StyledTitle>{p.title}</StyledTitle>
                <StyledDesc>{p.desc}</StyledDesc>
                <StyledTechRow>
                  {p.techs.map((t) => (
                    <StyledTechTag key={t} accent={p.accent}>{t}</StyledTechTag>
                  ))}
                </StyledTechRow>
              </StyledCardTop>
              <StyledDemoArea>
                {p.renderDemo?.(p.accent)}
              </StyledDemoArea>
            </StyledCard>
          ))}
        </StyledGrid>
      </StyledComponentSection>

    </StyledWrap>
  );
};

/* ── Styled ── */

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const StyledTabRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const StyledTab = styled.button<{ active: boolean; color: string }>`
  padding: 8px 28px;
  border-radius: 10px;
  border: 2px solid ${({ active, color }) => active ? color : "rgba(241,222,198,0.15)"};
  background: ${({ active, color }) => active ? color : "transparent"};
  color: ${({ active }) => active ? "#fff" : "rgba(241,222,198,0.5)"};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: background 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    border-color: ${({ color }) => color};
    color: ${({ active, color }) => active ? "#fff" : color};
  }
`;

const StyledSection = styled.section``;

const StyledSectionLabel = styled.h4<{ color: string }>`
  margin: 0 0 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ color }) => color};
  opacity: 0.75;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media screen and (min-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledCard = styled.div<{ accent: string; wide: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(26, 42, 64, 0.28);
  border-top: 3px solid ${({ accent }) => accent};

  @media screen and (min-width: 680px) {
    grid-column: ${({ wide }) => wide ? "1 / -1" : "auto"};
  }
`;

const StyledCardTop = styled.div`
  padding: 18px 20px 16px;
  border-bottom: 1px solid rgba(241, 222, 198, 0.08);
`;

const StyledTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.lightFont};
`;

const StyledDesc = styled.p`
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(241, 222, 198, 0.6);
`;

const StyledTechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const StyledTechTag = styled.span<{ accent: string }>`
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  background: ${({ accent }) => accent};
  color: #fff;
  border: 1px solid ${({ accent }) => accent};
  white-space: nowrap;
  opacity: 0.85;
`;

const StyledDemoArea = styled.div`
  flex: 1;
  background: rgba(15, 28, 48, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  min-height: 220px;
`;

/* Switch demos */

const StyledSwitchGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
`;

const StyledSwitchItem = styled.div<{ accent: string }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;

  & + & {
    border-top: 1px solid ${({ accent }) => accent}40;
  }
`;

const StyledDemoLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: rgba(241, 222, 198, 0.45);
  text-transform: uppercase;
  width: 80px;
  flex-shrink: 0;
`;

const StyledDemoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledToggleBtn = styled.button<{ accent: string }>`
  font-size: 12px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 8px;
  border: none;
  background: ${({ accent }) => accent};
  color: #fff;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition: opacity 0.2s;
  &:hover:not(:disabled) {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

const StyledAsyncWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const StyledAsyncTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledResultBox = styled.div<{ accent: string }>`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ accent }) => accent}40;
  background: ${({ accent }) => accent}10;
  overflow: hidden;
`;

const StyledPokeSprite = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  image-rendering: pixelated;
  flex-shrink: 0;
`;

const StyledResultItem = styled.div<{ accent: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(241, 222, 198, 0.85);
  & + & {
    border-top: 1px solid ${({ accent }) => accent}25;
  }
`;

const StyledResultIndex = styled.span<{ accent: string }>`
  font-size: 10px;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ accent }) => accent}30;
  color: ${({ accent }) => accent};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const StyledResultErr = styled.p`
  margin: 0;
  padding: 10px 12px;
  font-size: 12px;
  color: rgba(241, 222, 198, 0.45);
`;

const StyledBadge = styled.span<{ color: string }>`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  background: ${({ color }) => color}30;
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color}60;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: none;
  display: block;
`;

const StyledTypingWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
`;

const StyledTypingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  color: ${theme.lightFont};
  font-size: 15px;
`;

const StyledTypingLabel = styled.span<{ accent: string }>`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: ${({ accent }) => accent};
  width: 52px;
  flex-shrink: 0;
`;

const StyledTypingDivider = styled.div<{ accent: string }>`
  height: 1px;
  background: ${({ accent }) => accent}30;
`;

const StyledTypingInlineInput = styled.input<{ accent: string }>`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ accent }) => accent}60;
  padding: 2px 4px;
  font-size: 15px;
  font-family: inherit;
  color: ${theme.lightFont};
  outline: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: rgba(241, 222, 198, 0.3);
    font-style: italic;
  }

  &:focus {
    border-bottom-color: ${({ accent }) => accent};
  }
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
  font-family: 'Playfair Display', Georgia, serif;
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

const StyledFeaturedPreview = styled.div`
  background: #f0f0f0;
  position: relative;
  min-height: 400px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    min-height: 300px;
  }
`;

const StyledComponentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Profile;
