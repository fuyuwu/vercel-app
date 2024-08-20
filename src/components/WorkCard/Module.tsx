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
              <StyledAboutTitle>Frontend 2023 - Now</StyledAboutTitle>
              <StyledAboutContent>
                主要工作內容為開發及維護前後平台系統專案和遊戲相關前台PC版需求。與需求有關單位互相討論並協力完成需求。
              </StyledAboutContent>
            </div>
            <div>
              <StyledTag>負責專案</StyledTag>
              <div>
                <CollapseBlock
                  title={"前後台系統專案"}
                  defaultState="open"
                >
                  <StyledWorkBlock>
                    <p>
                      優化邏輯及開發新功能。
                    </p>
                    <p>
                      使用技術：Vue2, element-ui, RESTful API, SCSS
                    </p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
              <div>
                <CollapseBlock
                  title={"遊戲前台專案"}
                  defaultState="open"
                >
                  <StyledWorkBlock>
                    <p>
                      更換皮膚色碼，開發新功能及維護。
                    </p>
                    <p>
                      使用技術：Vue3, typescript, SCSS
                    </p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
              <div>
                <CollapseBlock
                  title={"負責獨立兩個小專案"}
                  defaultState="open"
                >
                  <StyledWorkBlock>
                    <p>
                      a. 外站下載專案：獨立的下載 APP 頁。
                    </p>
                    <p>
                      b. 導航網專案：依據不同使用者來源導入不同方案之頁面，可以從頁面上觀看速度等的相關數據。
                    </p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
            </div>
          </StyledSkillCard>
          <StyledSkillCard>
            <div style={{ padding: `5px 10px` }}>
              <StyledAboutTitle>Frontend 2021 - 2023</StyledAboutTitle>
              <StyledAboutContent>
                主要工作內容為開發重構平台專案和維護舊平台以及各個專案中修改 Bug 和邏輯，依 Scrum 敏捷式開發流程與後端、node.js 團隊、PM、UI/UX 進行多次討論並協力完成需求。
              </StyledAboutContent>
            </div>
            <div>
              <StyledTag>負責專案</StyledTag>
              <div>
                <CollapseBlock
                  title={"新平台重構專案"}
                  defaultState="open"
                >
                  <StyledWorkBlock>
                    <p>
                      於 2022年1月開始，邊熟悉新技術邊修正 Bug 及邏輯。後來持續進行開發各個需求及處理線上問題。
                      優化及整理整個專案共用的按鈕功能及樣式
                    </p>
                    <p>
                      使用技術：GraphQL, Apollo/Client, TypeScript, React Js, Tailwind css
                    </p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
              <div>
                <CollapseBlock
                  title={"平台專案"}
                  defaultState="open"
                >
                  <StyledWorkBlock>
                    <p>
                      - 撰寫新版輸入框及選擇語系 Picker 共用元件並套用至各業主專案中的登入/註冊/手機快捷登入/忘記密碼/完善信息等的相關表單
                      - 新增貨幣輸入限制規則邏輯
                      - 調整整個專案造訪語系部分邏輯
                      - 新增動態區塊效果並串接 API
                    </p>
                    <p>
                      使用技術：React Js, CSS Module, SASS/SCSS, Webpack
                    </p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
              <div>
                <CollapseBlock
                  title={"負責獨立兩個小專案"}
                  defaultState="open"
                >
                  <StyledWorkBlock>
                    <p>
                      a. 外站下載專案：獨立的下載 APP 頁。
                    </p>
                    <p>
                      b. 導航網專案：依據不同使用者來源導入不同方案之頁面，可以從頁面上觀看速度等的相關數據。
                    </p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
            </div>
          </StyledSkillCard>
          <StyledSkillCard>
            <div style={{ padding: `5px 10px` }}>
              <StyledAboutTitle>Frontend-Engineer 2019 - 2020</StyledAboutTitle>
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
                      使用技術：React, hooks, Typescript, React-native, css in js,
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
                      使用技術：React, hooks, Typescript, javascript, SCSS,
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
                    <p>使用技術：ejs, jQuery, html, css</p>
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
                    <p>使用技術：ejs, css, jQuery</p>
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
                    <p>使用技術：React, hooks, Typescript, Redux, SCSS</p>
                    <p>套用共用模組至機票專案。</p>
                    <p>使用技術：React</p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
            </div>
          </StyledSkillCard>
          <StyledSkillCard>
            <div style={{ padding: `5px 10px` }}>
              <StyledAboutTitle>日本 - Web Designer 2018 - 2019</StyledAboutTitle>
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
                    <p>使用技術：PhotoShop, css, html, javascript</p>
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
                    <p>使用技術：css, html, jQuery</p>
                  </StyledWorkBlock>
                </CollapseBlock>
              </div>
            </div>
          </StyledSkillCard>
          <StyledSkillCard>
            <div style={{ padding: `5px 10px` }}>
              <StyledAboutTitle>UI/UX Designer 2018 - 2019</StyledAboutTitle>
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
                    <p>使用技術：css, html, javascript, php, MySQL </p>
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
