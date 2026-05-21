import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../core";
import Switch from "../Switch";
import Weather from "../Weather";

/* ── Types ── */

type ProjectGroup = "Components" | "Projects";

interface Project {
  id: string;
  group: ProjectGroup;
  title: string;
  desc: string;
  techs: string[];
  accent: string;
  type: "demo" | "iframe";
  renderDemo?: () => React.ReactNode;
  iframeUrl?: string;
}

/* ── Switch sub-demos ── */

const ControlBtn: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Switch onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />;
};

const DisabledDemo: React.FC = () => {
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
      <StyledToggleBtn onClick={() => setIsDisabled((v) => !v)}>
        {isDisabled ? "enable" : "disable"}
      </StyledToggleBtn>
    </StyledDemoRow>
  );
};

const AsyncDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const fetchData = () => {
    if (isLoading) return;
    setIsLoading(true);
    setIsDisabled(true);
    fetch("https://pokeapi.co/api/v2/evolution-chain/1/")
      .then((res) => res.json())
      .then(() => setTimeout(() => {
        setIsLoading(false);
        setIsOpen((v) => !v);
        setIsDisabled(false);
      }, 1500))
      .catch(() => setTimeout(() => {
        setIsLoading(false);
        setIsDisabled(false);
      }, 3000));
  };

  return (
    <StyledDemoRow>
      <Switch onClick={fetchData} isLoading={isLoading} isOpen={isOpen} isDisabled={isDisabled} />
      {isOpen && <StyledBadge color="#2D6A4F">fetch 成功</StyledBadge>}
    </StyledDemoRow>
  );
};

/* ── Project data ── */

const PROJECTS: Project[] = [
  {
    id: "weather",
    group: "Components",
    title: "Weather Widget",
    desc: "串接中央氣象局開放資料 API，依使用者 IP 定位自動帶入城市，支援手動切換縣市，即時顯示溫度與天氣狀態。",
    techs: ["React", "Hooks", "TypeScript", "styled-components", "CWB API", "Geolocation"],
    accent: "#0077B6",
    type: "demo",
    renderDemo: () => <Weather />,
  },
  {
    id: "switch",
    group: "Components",
    title: "Switch Component",
    desc: "可組合的 Switch 元件，封裝三種使用情境：基本開關、disabled 狀態外部控制、非同步 loading（串接 PokeAPI 示範）。",
    techs: ["React", "Hooks", "TypeScript", "styled-components", "PokeAPI"],
    accent: "#2D6A4F",
    type: "demo",
    renderDemo: () => (
      <StyledSwitchGrid>
        <StyledSwitchItem>
          <StyledDemoLabel>基本</StyledDemoLabel>
          <ControlBtn />
        </StyledSwitchItem>
        <StyledSwitchItem>
          <StyledDemoLabel>Disabled 控制</StyledDemoLabel>
          <DisabledDemo />
        </StyledSwitchItem>
        <StyledSwitchItem>
          <StyledDemoLabel>Async fetch</StyledDemoLabel>
          <AsyncDemo />
        </StyledSwitchItem>
      </StyledSwitchGrid>
    ),
  },
  {
    id: "vue-portfolio",
    group: "Projects",
    title: "Vue Portfolio",
    desc: "以 Vue 3 + Composition API + TypeScript 建構的個人作品集，串接多組 API，支援 RWD 響應式設計。",
    techs: ["Vue 3", "Composition API", "TypeScript", "Vite", "Pinia", "Tailwind CSS"],
    accent: "#42b883",
    type: "iframe",
    iframeUrl: "https://your-vue-portfolio-url.vercel.app", // ← 替換成實際網址
  },
];

/* ── Component ── */

const GROUPS: ProjectGroup[] = ["Components", "Projects"];

const Profile: React.FC = () => {
  const [selectedId, setSelectedId] = useState(PROJECTS[0].id);
  const selected = PROJECTS.find((p) => p.id === selectedId)!;

  return (
    <StyledLayout>
      {/* Sidebar */}
      <StyledSidebar>
        {GROUPS.map((group) => {
          const items = PROJECTS.filter((p) => p.group === group);
          if (!items.length) return null;
          return (
            <StyledNavGroup key={group}>
              <StyledGroupLabel>{group}</StyledGroupLabel>
              {items.map((p) => (
                <StyledNavItem
                  key={p.id}
                  active={p.id === selectedId}
                  accent={p.accent}
                  onClick={() => setSelectedId(p.id)}
                >
                  <StyledNavDot active={p.id === selectedId} accent={p.accent} />
                  {p.title}
                </StyledNavItem>
              ))}
            </StyledNavGroup>
          );
        })}
      </StyledSidebar>

      {/* Content */}
      <StyledContent>
        <StyledContentHeader accent={selected.accent}>
          <div>
            <StyledTitle>{selected.title}</StyledTitle>
            <StyledDesc>{selected.desc}</StyledDesc>
            <StyledTechRow>
              {selected.techs.map((t) => (
                <StyledTechTag key={t}>{t}</StyledTechTag>
              ))}
            </StyledTechRow>
          </div>
        </StyledContentHeader>

        <StyledDemoArea>
          {selected.type === "demo" && selected.renderDemo?.()}
          {selected.type === "iframe" && (
            <StyledIframeWrap>
              <StyledIframe
                src={selected.iframeUrl}
                title={selected.title}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </StyledIframeWrap>
          )}
        </StyledDemoArea>
      </StyledContent>
    </StyledLayout>
  );
};

/* ── Styled ── */

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-height: 500px;
  background: transparent;
  border-radius: 14px;
  overflow: hidden;

  @media screen and (min-width: 680px) {
    flex-direction: row;
  }
`;

const StyledSidebar = styled.nav`
  background: #1A2A40;
  border-bottom: 1px solid rgba(241, 222, 198, 0.08);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 24px;
  padding: 12px 16px;

  @media screen and (min-width: 680px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0;
    width: 180px;
    flex-shrink: 0;
    border-bottom: none;
    border-right: 1px solid rgba(241, 222, 198, 0.08);
    padding: 20px 0;
  }
`;

const StyledNavGroup = styled.div`
  @media screen and (min-width: 680px) {
    margin-bottom: 20px;
  }
`;

const StyledGroupLabel = styled.span`
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(241, 222, 198, 0.45);
  padding: 0 0 6px;

  @media screen and (min-width: 680px) {
    padding: 0 16px 6px;
  }
`;

const StyledNavItem = styled.button<{ active: boolean; accent: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 7px 8px;
  border: none;
  border-radius: 8px;
  background: ${({ active, accent }) => active ? `${accent}30` : "transparent"};
  color: ${({ active }) => active ? "rgba(241, 222, 198, 1)" : "rgba(241, 222, 198, 0.45)"};
  font-size: 13px;
  font-weight: ${({ active }) => active ? 700 : 500};
  cursor: pointer;
  text-align: left;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;

  @media screen and (min-width: 680px) {
    border-radius: 0;
    padding: 7px 16px;
    border-right: 2px solid ${({ active, accent }) => active ? accent : "transparent"};
  }

  &:hover {
    background: rgba(241, 222, 198, 0.08);
    color: rgba(241, 222, 198, 1);
  }
`;

const StyledNavDot = styled.span<{ active: boolean; accent: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ active, accent }) => active ? accent : "rgba(241,222,198,0.3)"};
`;

const StyledContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const StyledContentHeader = styled.div<{ accent: string }>`
  padding: 20px 24px 16px;
  background: transparent;
  border-bottom: 1px solid rgba(241, 222, 198, 0.1);
  border-top: 3px solid ${({ accent }) => accent};

  @media screen and (min-width: 680px) {
    border-top: none;
    border-left: 3px solid ${({ accent }) => accent};
  }
`;

const StyledTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.lightFont};
`;

const StyledDesc = styled.p`
  margin: 0 0 12px;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(241, 222, 198, 0.65);
  opacity: 1;
`;

const StyledTechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const StyledTechTag = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(241, 222, 198, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.16);
  white-space: nowrap;
`;

const StyledDemoArea = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  min-height: 260px;
`;

/* Switch demos */

const StyledSwitchGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;

const StyledSwitchItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledDemoLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${theme.darkFont};
  opacity: 0.45;
  text-transform: uppercase;
`;

const StyledDemoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledToggleBtn = styled.button`
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid rgba(26, 42, 64, 0.2);
  background: transparent;
  color: ${theme.darkFont};
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: rgba(26, 42, 64, 0.08); }
`;

const StyledBadge = styled.span<{ color: string }>`
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  background: ${({ color }) => color}18;
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color}28;
`;

/* iframe */

const StyledIframeWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: none;
  display: block;
`;

export default Profile;
