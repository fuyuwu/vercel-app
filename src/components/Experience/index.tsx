import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import Timeline from "../Timeline";

// Import images
import luxonsImg from "../../core/images/luxons.png";
import innoImg from "../../core/images/inno.png";
import quancomImg from "../../core/images/quancom.png";
import starImg from "../../core/images/star.webp";
import lionImg from "../../core/images/lion.jpg";
import eqsImg from "../../core/images/eqs.webp";
import iiiImg from "../../core/images/iii.svg";

interface IExperienceProps {
  tabId: string;
}

const Experience: React.FC<IExperienceProps> = ({ tabId }) => {
  const currentTabId = useAppSelector(state => state.tab.currentTabId);
  if (currentTabId !== tabId) return null
  const experienceItems = [
    {
      id: "1",
      year: "2024 - Now",
      title: "Frontend Developer",
      company: "雷速網絡科技",
      description: "主要工作內容為開發及維護前後平台系統專案和遊戲相關前台PC版需求。與需求有關單位互相討論並協力完成需求。",
      picture: luxonsImg,
      skills: [
        "Vue2",
        "Vue3",
        "element-ui",
        "JavaScript",
        "RESTful API",
        "SCSS"
      ]
    },
    {
      id: "2",
      year: "2021-2023",
      title: "Frontend Developer",
      company: "伊諾科技",
      description: "負責開發及維護前後台系統專案和遊戲相關前台PC版需求。與需求有關單位互相討論並協力完成需求。",
      picture: innoImg,
      skills: [
        "React",
        "Typescript",
        "JavaScript",
        "Web Api",
        "webpack",
      ]
    },
    {
      id: "3",
      year: "2020-2021",
      title: "Frontend Developer",
      company: "量算科技",
      picture: quancomImg,
      skills: [
        "React",
        "Typescript",
        "JavaScript",
        "Web Api",
        "webpack",
      ]
    },
    {
      id: "4",
      year: "2020-2021",
      title: "Frontend Developer",
      company: "恆星科技",
      picture: starImg,
      skills: [
        "React",
        "Typescript",
        "JavaScript",
        "Web Api",
        "webpack",
      ]
    },
    {
      id: "5",
      year: "2019-2020",
      title: "Frontend Developer",
      company: "雄獅資訊",
      description: "主要工作內容為開發重構平台專案和維護舊平台以及各個專案中修改 Bug 和邏輯，依 Scrum 敏捷式開發流程與後端、node.js 團隊、PM、UI/UX 進行多次討論並協力完成需求。",
      picture: lionImg,
      skills: [
        "React",
        "Redux",
        "hooks",
        "Storybook",
        "css in js",
        "styled-components",
        "Typescript",
        "JavaScript",
        "Web Api",
        "webpack",
        "SCSS",
        "ejs",
        "css",
        "jQuery"
      ]
    },
    {
      id: "6",
      year: "2018-2019",
      title: "Frontend Developer",
      subtitle: "網頁程式設計, 設計廣告 banner, 整合行銷策略, 製作行銷企劃簡報",
      company: "日商 EQS",
      picture: eqsImg,
      description: "主要設計分公司官網及切版和網頁效果",
      skills: [
        "PhotoShop",
        "css",
        "html",
        "javascript",
        "jQuery"
      ]
    },
    {
      id: "7",
      year: "2017-2018",
      title: "Frontend Developer",
      subtitle: "資策會",
      description: "負責開發及維護前後台系統專案和遊戲相關前台PC版需求。與需求有關單位互相討論並協力完成需求。",
      picture: iiiImg,
      skills: [
        "css",
        "html",
        "javascript",
        "php",
        "MySQL"
      ]
    }
  ];
  return (
    <StyledExperience>
      <div>
        <Timeline items={experienceItems} />
      </div>
    </StyledExperience>
  );
};

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;

export default Experience;