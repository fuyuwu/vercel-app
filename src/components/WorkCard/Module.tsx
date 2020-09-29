import React from "react";
import CollapseBlock from "../CollapseBlock";

import {
  StyledTag,
  StyledCard,
  StyledAbout,
  StyledAboutTitle,
  StyledFlex,
  StyledSkillCard,
  StyledNextStep,
  StyledAboutContent,
  StyledWorkBlock,
} from "../../core/styles";

interface IWorkCardProps {
  id: string;
  visible: string;
}

const WorkCard: React.FC<IWorkCardProps> = (props) => {
  return (
    <StyledCard id={props.id} visible={props.visible}>
      <StyledAbout>
        <StyledAboutTitle fontSize={"25"}>Work Experience</StyledAboutTitle>
        <StyledFlex>
          <StyledSkillCard>
            <div style={{ padding: `5px 10px` }}>
              <StyledAboutTitle>Frontend-Engineer 2019-2020</StyledAboutTitle>
              <StyledAboutContent>
                主要工作為前端開發, 製作各種共通組件以及環境建置
              </StyledAboutContent>
            </div>
            <div>
              <StyledTag>負責專案</StyledTag>
              <div>
                <CollapseBlock
                  title={"React-Native android開發"}
                  defaultState="open"
                >
                  <StyledWorkBlock>
                    <p>
                      主要執行票券商品細節頁面的切版及部分商業邏輯,
                      並撰寫共用組件及樣式。
                    </p>
                    <p>
                      使用：React, hooks, Typescript, React-native, css in js,
                      styled-components
                    </p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
              <div>
                <CollapseBlock title={"站長平台專案"} defaultState="open">
                  <StyledWorkBlock>
                    <p>
                      主要工作為製作全公司共通的共用組件, templates。能夠讓 UX
                      快速套好樣板並使用其功能, 以利後續有新需求方便討論和優化。
                    </p>
                    <p>
                      使用：React, hooks, Typescript, javascript, SCSS,
                      storybook
                    </p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>

              {/* ---------- */}

              <div>
                <CollapseBlock title={"產品機票營運專案"}>
                  <StyledWorkBlock>
                    <p>主要工作為切版及套用共通組件。</p>
                    <p>使用：ejs, jQuery, html, css</p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
              <div>
                <CollapseBlock title={"會員專案"}>
                  <StyledWorkBlock>
                    <p>
                      主要工作為了解新的使用者需求及改版會員中心,
                      會員登入註冊樣式和部分邏輯。
                    </p>
                    <p>使用：ejs, css, jQuery</p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>

              {/* ----------------- */}

              <div>
                <CollapseBlock title={"搜尋引擎專案"}>
                  <StyledWorkBlock>
                    <p>
                      主要負責項目為, 旅遊-自由行, 將舊有邏輯改版至 React
                      版本及優化及整理出共用邏輯。
                    </p>
                    <p>使用：React, hooks, Typescript, Redux, SCSS</p>
                    <p>套用共用模組至機票專案。</p>
                    <p>使用：React</p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
            </div>
          </StyledSkillCard>
          <StyledSkillCard>
            <div style={{ padding: `5px 10px` }}>
              <StyledAboutTitle>日本 - Web Designer 2018-2019</StyledAboutTitle>
              <StyledAboutContent>
                網頁程式設計, 設計廣告 banner, 整合行銷策略, 製作行銷企劃簡報
              </StyledAboutContent>
            </div>
            <div>
              <StyledTag>負責專案</StyledTag>
              <div>
                <CollapseBlock
                  title={"日本分公司官網設計切版"}
                  defaultState="open"
                >
                  <StyledWorkBlock>
                    <p>主要設計分公司官網及切版和網頁效果</p>
                    <p>使用：PhotoShop, css, html, javascript</p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
              <div>
                <CollapseBlock
                  title={"日本 CINEMAS-廣告活動切版"}
                  defaultState="open"
                >
                  <StyledWorkBlock>
                    <p>設計電影院廣告活動頁面切版和網頁效果</p>
                    <p>使用：css, html, jQuery</p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
            </div>
          </StyledSkillCard>
          <StyledSkillCard>
            <div style={{ padding: `5px 10px` }}>
              <StyledAboutTitle>UI/UX Designer 2018-2019</StyledAboutTitle>
              <StyledAboutContent>
                網頁程式設計, 網頁切版, 後端資料庫建置, 設計購買流程
              </StyledAboutContent>
            </div>
            <div>
              <StyledTag>負責專案</StyledTag>
              <div>
                <CollapseBlock title={"成果發表"} defaultState="open">
                  <StyledWorkBlock>
                    <p>主題：咖啡機電商網站</p>
                    <p>
                      主要負責：咖啡機電商網站-商品頁面(樣式切版,比較商品功能及頁面商業邏輯),
                      購物流程
                    </p>
                    <p>使用：css, html, javascript, php, MySQL </p>
                    <StyledNextStep padding={"5px"}>
                      <a
                        href="http://3.16.254.244/Deguster/index.php"
                        target="_blank"
                      >
                        Deguster官網
                      </a>
                    </StyledNextStep>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
            </div>
          </StyledSkillCard>
        </StyledFlex>
      </StyledAbout>
    </StyledCard>
  );
};
export default WorkCard;
