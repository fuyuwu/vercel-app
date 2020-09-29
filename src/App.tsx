import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkCard from "./components/WorkCard/Module";
import Skills from "./components/Skills";
import Tabs from "./components/Tabs";
import Profile from "./components/Profile";
import Loading from "./components/Loading";
import { Mail, CellPhone } from "./components/Icons";

import { theme } from "./core";
import { ITab } from "./core/type";

interface IProps {
  title?: string;
}

const App: React.FC<IProps> = (props) => {
  const tab = [
    { id: "tab01", name: "ABOUT" },
    { id: "tab02", name: "SKILLS" },
    { id: "tab03", name: "PROTFILO" },
  ];
  const [currentTabID, setCurrentTabID] = useState<string>(tab[0].id); //tab
  const tabOnClick = (id: string) => {
    setCurrentTabID(id);
  };
  const liRenderer = (data: ITab) => {
    const { id, name } = data;

    return (
      <li className="tabList" key={id} onClick={() => tabOnClick(id)}>
        <span className={`tabText ${id === currentTabID ? "active" : ""}`}>
          {name}
        </span>
      </li>
    );
  };
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    setIsLoad(false);
  }, []);
  return (
    <>
      {/* <StyledLoad isLoad={isLoad}>{isLoad ? "頁面加載中...." : ""}</StyledLoad> */}
      {isLoad ? (
        <main>
          <StyledLoad>
            <Loading
              visible={true}
              bgColor={theme.darkFont}
              style={{ top: -80 }}
            />
            <p>Loading ....</p>
          </StyledLoad>
        </main>
      ) : (
        <div style={{ overflow: "hidden", maxWidth: "100%" }}>
          <StyledContainer>
            <Header title="FuFu's Blog" />
            <StyledContent>
              <div className="animate-left flex" style={{ marginBottom: 15 }}>
                <div className="me" />
                <StyledAboutMe>Front-end Engineer</StyledAboutMe>
                <StyledContact>
                  <StyledIcon
                    href="callto:+886988611937"
                    rel="noreferrer noopener"
                  >
                    <CellPhone
                      width={24}
                      height={24}
                      fill={`${theme.darkFont}`}
                    />
                    +886 988611937
                  </StyledIcon>

                  {/* --example for next/Link-------- */}
                  {/* <Link
                  prefetch
                  href="/page1"
                  as={`${process.env.ASSET_PREFIX}/page1`}
                >
                  <a>Go to page</a>
                </Link> */}
                  {/* ---------- */}
                  <StyledIcon
                    href="mailto:fuyuwu041000@gamail.com"
                    rel="noreferrer noopener"
                  >
                    <Mail width={24} height={24} fill={`${theme.darkFont}`} />
                    fuyuwu041000@gamail.com
                  </StyledIcon>
                </StyledContact>
                <StyledtagFlex>
                  <StyledTag># 好奇心旺盛</StyledTag>
                  <StyledTag># 擅長協作開發</StyledTag>
                  <StyledTag># 善於傾聽及溝通</StyledTag>
                </StyledtagFlex>
              </div>
              <StyledLine lineWeight={3} />
              {/* ---------------------------------------------- */}
              <StyledNextStep>
                <Tabs
                  data={tab}
                  currentTab={currentTabID}
                  onClick={tabOnClick}
                  tabRender={liRenderer}
                />
              </StyledNextStep>

              <WorkCard id={"tab01"} visible={currentTabID} />
              <Skills id={"tab02"} visible={currentTabID} />
              <Profile id={"tab03"} visible={currentTabID} />
            </StyledContent>
            {/* <p>{date ? date : "Loading date..."}</p> */}
            <Footer />
          </StyledContainer>
        </div>
      )}
      {/* <main>
        <h2>The date according to Go is:</h2>
        <p>{date ? date : "Loading date..."}</p>
      </main> */}
    </>
  );
};
const StyledLoad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    font-size: 20px;
    color: ${theme.darkFont};
  }
`;
const StyledtagFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledAboutMe = styled.div`
  text-align: center;
  color: ${theme.darkFont};
  word-break: break-all;
  font-size: 20px;
  font-family: "Mamelon";
  line-height: 1;
  padding: 10px 0;
`;
// Icons-----------
const StyledContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const StyledIcon = styled.a`
  text-decoration: none;
  transition: all 0.5s;
  padding: 5px 10px;
  cursor: pointer;
  color: ${theme.darkFont};
  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
  &:hover {
    cursor: pointer;
    svg {
      transition: all 0.5s;
      fill: #fa8072;
    }
  }
`;
// Icons--------
const StyledContainer = styled.div`
  margin: 10px;
  background: ${theme.mainTheme};
  border-radius: 10px;
  /* @media screen and (min-width: 768px) {
    width: 100%;
  } */
`;
const StyledContent = styled.div`
  padding: 10px;
`;
const StyledLine = styled.div<{
  lineStyle?: string;
  lineWeight?: number;
  borderColor?: string;
}>`
  height: 1px;
  border-bottom: ${(props) => (props.lineStyle ? props.lineStyle : "dashed")};
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : theme.darkFont};
  border-width: ${(props) => (props.lineWeight ? props.lineWeight : 5)}px;
`;
const StyledNextStep = styled.div<{ padding?: string }>`
  flex: 1;
  text-align: center;
  margin: 15px auto;
  a {
    display: inline-block;
    margin-right: 1px;
    border-radius: 3px;
    padding: ${(props) => props.padding || "10px 15px"};
    background: ${theme.darkFont};
    color: ${theme.normalFont};
    cursor: pointer;
    transition: 0.3s ease;
    font-weight: bold;
    font-size: 14px;
    word-break: break-all;
    white-space: nowrap;
    letter-spacing: 0.8px;
    &:hover {
      transition: 0.3s ease;
      background: ${theme.lightFont};
      color: ${theme.darkFont};
    }
    &.active {
      background: ${theme.lightFont};
      color: ${theme.darkFont};
    }
  }
`;

const StyledTag = styled.a`
  display: inline-block;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 15px;
  margin: 2px 5px;
  background-color: ${theme.lightFont};
  color: ${theme.normalFont};
  letter-spacing: 0.8px;
  cursor: default;
  svg {
    margin-left: 4px;
    margin-right: 2px;
    vertical-align: middle;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export default App;
