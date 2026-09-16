'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../core";
import { Taiwan, Japan, USA } from "../Icons";
import Switch from "../Switch";
import Weather from "../Weather";
import Typeing from "../Typeing";

/* ── Frontend live demos ── */

const ControlBtn: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
                    width={36}
                    height={36}
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

interface FrontendDemo {
  id: string;
  title: string;
  desc: string;
  techs: string[];
  accent: string;
  wide?: boolean;
  renderDemo: (accent: string) => React.ReactNode;
}

const frontendDemos: FrontendDemo[] = [
  {
    id: "weather",
    title: "Weather Widget",
    desc: "串接中央氣象局開放資料 API，依使用者 IP 定位自動帶入城市，可手動切換縣市，即時顯示溫度與天氣狀態。",
    techs: ["React", "Hooks", "TypeScript", "styled-components", "CWB API", "Geolocation"],
    accent: "#0077B6",
    renderDemo: () => <Weather />,
  },
  // {
  //   id: "switch",
  //   title: "Switch Component",
  //   desc: "可組合的 Switch 元件，封裝三種使用情境：基本開關、disabled 狀態外部控制、非同步 loading（串接 PokeAPI 示範）。",
  //   techs: ["React", "Hooks", "TypeScript", "styled-components", "PokeAPI"],
  //   accent: "#087ea4",
  //   renderDemo: (accent: string) => (
  //     <StyledSwitchGrid>
  //       <StyledSwitchItem accent={accent}>
  //         <StyledDemoLabel>Default</StyledDemoLabel>
  //         <ControlBtn />
  //       </StyledSwitchItem>
  //       <StyledSwitchItem accent={accent}>
  //         <StyledDemoLabel>Disabled Control</StyledDemoLabel>
  //         <DisabledDemo accent={accent} />
  //       </StyledSwitchItem>
  //       <StyledSwitchItem accent={accent}>
  //         <StyledDemoLabel>Async fetch</StyledDemoLabel>
  //         <AsyncDemo accent={accent} />
  //       </StyledSwitchItem>
  //     </StyledSwitchGrid>
  //   ),
  // },
  {
    id: "typing",
    title: "Typing Animation",
    desc: "Typing Writer Animation",
    techs: ["React", "Hooks", "TypeScript", "styled-components"],
    accent: "#0077B6",
    renderDemo: (accent: string) => <TypingDemo accent={accent} />,
  },
];

const skillCategories = [
  {
    label: "AI",
    accent: "var(--primary-main)",
    skills: ["Claude Code", "AI-Assisted Development", "Prompt Engineering", "Agentic Coding", "MCP"],
  },
  {
    label: "Styling",
    accent: "#C9184A",
    skills: ["Tailwind CSS", "SASS/SCSS", "styled-components", "Element-ui", "Element Plus", "Vant", "CSS Module", "CSS3", "Ant Design", "Material Design"],
  },
  {
    label: "Backend & Git",
    accent: "#0077B6",
    skills: ["Apollo Client", "GraphQL", "RESTful API", "WebSocket", "Git"],
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
          <StyledDemoGrid>
            {frontendDemos.map((p) => (
              <StyledDemoCard key={p.id} accent={p.accent} wide={p.wide}>
                <StyledDemoCardTop>
                  <StyledDemoTitle>{p.title}</StyledDemoTitle>
                  <StyledDemoDesc>{p.desc}</StyledDemoDesc>
                  <StyledDemoTechRow>
                    {p.techs.map((t) => (
                      <StyledDemoTechTag key={t} accent={p.accent}>{t}</StyledDemoTechTag>
                    ))}
                  </StyledDemoTechRow>
                </StyledDemoCardTop>
                <StyledDemoArea>
                  {p.renderDemo(p.accent)}
                </StyledDemoArea>
              </StyledDemoCard>
            ))}
          </StyledDemoGrid>
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

/* Frontend live demos */

const StyledDemoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media screen and (min-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledDemoCard = styled.div<{ accent: string; wide?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(26, 42, 64, 0.28);
  border-top: 3px solid ${({ accent }) => accent};

  @media screen and (min-width: 680px) {
    grid-column: ${({ wide }) => (wide ? "1 / -1" : "auto")};
  }
`;

const StyledDemoCardTop = styled.div`
  padding: 18px 20px 16px;
  border-bottom: 1px solid rgba(241, 222, 198, 0.08);
`;

const StyledDemoTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.lightFont};
`;

const StyledDemoDesc = styled.p`
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(241, 222, 198, 0.6);
`;

const StyledDemoTechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const StyledDemoTechTag = styled.span<{ accent: string }>`
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

const StyledPokeSprite = styled(Image)`
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
