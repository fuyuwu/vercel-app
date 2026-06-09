'use client';

import React from "react";
import styled from "styled-components";
import CollapseBlock from "../CollapseBlock";
import { theme } from "../../core";

import luxonsImg from "../../core/images/luxons.png";
import innoImg from "../../core/images/inno.png";
import quancomImg from "../../core/images/quancom.png";
import lionImg from "../../core/images/lion.jpg";
import eqsImg from "../../core/images/eqs.webp";
import iiiImg from "../../core/images/iii.svg";

const TechTags: React.FC<{ techs: string[] }> = ({ techs }) => (
  <StyledTechRow>
    {techs.map((t) => (
      <StyledTechTag key={t}>{t}</StyledTechTag>
    ))}
  </StyledTechRow>
);

const CompanyName: React.FC<{ logo: string | { src: string }; alt: string; isSvg?: boolean; children: React.ReactNode }> = ({ logo, alt, isSvg, children }) => (
  <StyledCompanyRow>
    <StyledLogo src={typeof logo === 'string' ? logo : logo.src} alt={alt} isSvg={isSvg} />
    <ExpContent style={{ margin: 0 }}>{children}</ExpContent>
  </StyledCompanyRow>
);

const Experience: React.FC = () => {
  return (
    <StyledExperience>
      <StyledSection>
        <StyledGrid>

          <StyledCardWrap>
            <ExpTitle>前端工程師・2023/4 - 2026/4</ExpTitle>
            <CompanyName logo={luxonsImg} alt="雷速">雷速網絡科技有限公司</CompanyName>
            <ExpContent style={{ marginBottom: 4 }}>
              開發及維護前後台系統專案和遊戲相關前台 PC/H5 需求，與各需求單位討論並協力完成。
            </ExpContent>
            <ExpAchievement>
              ✦ 優化彈窗確認流程與共用搜尋機制；引入 AI 輔助開發，體感效率提升 40%
            </ExpAchievement>
            <ExpLabel>負責專案</ExpLabel>
            <CollapseBlock title="前後台系統專案" defaultState="open">
              <ExpWorkBlock>
                <ExpResult>穩定核心功能，持續交付新需求，降低線上異常率。</ExpResult>
                <p>優化邏輯及開發新功能。</p>
                <TechTags techs={["Vue2", "element-ui", "RESTful API", "SCSS"]} />
              </ExpWorkBlock>
            </CollapseBlock>
            <CollapseBlock title="新後台專案（2024/9~10）" defaultState="open">
              <ExpWorkBlock>
                <ExpResult>兩個月內快速交付可擴充管理後台，大幅縮短初期建置工時。</ExpResult>
                <p>以 vue-pure-admin 為底層架構，快速建立管理後台。</p>
                <TechTags techs={["Vue3", "Composition API", "Vite 5", "TypeScript", "Element Plus", "Pinia", "Vue Router 4", "Tailwind CSS", "pnpm"]} />
              </ExpWorkBlock>
            </CollapseBlock>
            <CollapseBlock title="新版代理後台 2.0（2025/12~2026/1）" defaultState="open">
              <ExpWorkBlock>
                <ExpResult>如期上線 H5 代理後台，登入驗證流程優化後錯誤率明顯下降。</ExpResult>
                <p>主要以 H5 開發，負責核心頁面功能、登入驗證設定及優化、專案共用表單驗證規則。</p>
                <TechTags techs={["Vue3", "TypeScript", "Vite", "Pinia", "Vue Router 4", "Tailwind CSS", "Vant"]} />
              </ExpWorkBlock>
            </CollapseBlock>
            <CollapseBlock title="遊戲前台專案">
              <ExpWorkBlock>
                <ExpResult>成功換膚多組品牌版本，功能穩定交付、無重大線上問題。</ExpResult>
                <p>更換多組企業皮膚色碼，開發新功能及維護。</p>
                <TechTags techs={["Vue3", "TypeScript", "SCSS"]} />
              </ExpWorkBlock>
            </CollapseBlock>
          </StyledCardWrap>

          <StyledCardWrap>
            <ExpTitle>前端工程師・2021/11 - 2023/4</ExpTitle>
            <CompanyName logo={innoImg} alt="伊諾">伊諾科技有限公司</CompanyName>
            <ExpContent style={{ marginBottom: 8 }}>
              依 Scrum 敏捷流程與後端、Node.js 團隊、PM、UI/UX 協力完成需求，負責 Bug 修復、邏輯優化及新功能開發。
            </ExpContent>
            <ExpLabel>負責專案</ExpLabel>
            <CollapseBlock title="新平台重構專案" defaultState="open">
              <ExpWorkBlock>
                <ExpResult>動畫通知功能上線後，使用者即時互動體驗顯著提升。</ExpResult>
                <p>串接 WebSocket 新增動畫通知功能、優化優惠活動邏輯、新增代理加盟表單驗證、修改紅包雨邏輯。</p>
                <TechTags techs={["GraphQL", "Apollo Client", "TypeScript", "React", "Tailwind CSS"]} />
              </ExpWorkBlock>
            </CollapseBlock>
            <CollapseBlock title="平台專案" defaultState="open">
              <ExpWorkBlock>
                <ExpResult>共用元件複用至多個業主，減少重複開發，統一跨業主表單體驗。</ExpResult>
                <p>撰寫輸入框及選擇語系 Picker 共用元件，套用至各業主登入/註冊/忘記密碼等表單；新增貨幣輸入限制規則；串接 API 新增動態區塊效果。</p>
                <TechTags techs={["React", "CSS Module", "SCSS", "Webpack"]} />
              </ExpWorkBlock>
            </CollapseBlock>
            <CollapseBlock title="獨立小專案">
              <ExpWorkBlock>
                <ExpResult>獨立負責兩個對外專案，從開發到上線全程掌控，如期交付。</ExpResult>
                <p>a. 外站下載專案：獨立的 APP 下載頁。</p>
                <p>b. 導航網專案：依使用者來源導入不同方案，頁面可查看速度等相關數據。</p>
              </ExpWorkBlock>
            </CollapseBlock>
          </StyledCardWrap>

          <StyledCardWrap>
            <ExpTitle>前端工程師・2020/11 - 2021/9</ExpTitle>
            <CompanyName logo={quancomImg} alt="量算">量算科技有限公司</CompanyName>
            <ExpContent style={{ marginBottom: 8 }}>
              開發新系統平台及內部使用系統，製作共通元件，與 PO、設計師討論需求，與後端有效溝通串接資料。
            </ExpContent>
            <ExpLabel>負責專案</ExpLabel>
            <CollapseBlock title="後台／商務後台專案" defaultState="open">
              <ExpWorkBlock>
                <ExpResult>建立多角色權限管理系統，支援不同層級數據操作需求，提升作業效率。</ExpResult>
                <p>依角色權限顯示不同畫面的管理系統，刻畫數據列表、表單串接及使用者體驗優化。</p>
                <TechTags techs={["React", "Redux", "Hooks", "react-hook-form", "styled-components", "react-i18next", "RESTful API"]} />
              </ExpWorkBlock>
            </CollapseBlock>
            <CollapseBlock title="共用元件開發" defaultState="open">
              <ExpWorkBlock>
                <ExpResult>產出完整共用元件庫，統一全站 UI 一致性，降低跨專案重工成本。</ExpResult>
                <p>搜尋文字標籤、父子層下拉選單、複合式搜尋元件等大型元件，以及 checkbox、radio、input 等統一樣式表單元件。串接 Google ReCaptcha V3 至登入驗證機制。</p>
              </ExpWorkBlock>
            </CollapseBlock>
            <CollapseBlock title="Storybook 專案">
              <ExpWorkBlock>
                <ExpResult>建立全公司元件文件，加速 UX 與開發的需求溝通效率。</ExpResult>
                <p>製作全公司共通元件與 templates，讓 UX 快速套用樣板以利需求討論與優化。</p>
                <TechTags techs={["React", "Hooks", "JavaScript", "Storybook"]} />
              </ExpWorkBlock>
            </CollapseBlock>
          </StyledCardWrap>

          <StyledCardWrap>
            <ExpTitle>前端工程師・2019/11 - 2020/9</ExpTitle>
            <CompanyName logo={lionImg} alt="雄獅">雄獅資訊科技股份有限公司</CompanyName>
            <ExpContent style={{ marginBottom: 8 }}>
              前端開發、共通元件製作，與 UX 及後端有效溝通，參與 React-Native 旅遊 App 開發及多個平台專案。
            </ExpContent>
            <ExpLabel>負責專案</ExpLabel>
            <CollapseBlock title="React-Native 旅遊票券 App（5個月以上）" defaultState="open">
              <ExpWorkBlock>
                <ExpResult>完成票券細節頁切版與商業邏輯，準時交付 App 功能模組上線。</ExpResult>
                <p>執行票券商品細節頁面切版及部分商業邏輯，撰寫共用元件及樣式。</p>
                <TechTags techs={["React", "Hooks", "TypeScript", "React Native", "CSS in JS"]} />
              </ExpWorkBlock>
            </CollapseBlock>
            <CollapseBlock title="站長平台專案" defaultState="open">
              <ExpWorkBlock>
                <ExpResult>共通元件與樣板落地，讓 UX 設計驗證週期明顯縮短。</ExpResult>
                <p>製作全公司共通元件與 templates，讓 UX 快速套好樣板。</p>
                <TechTags techs={["React", "Hooks", "TypeScript", "SCSS", "Storybook"]} />
              </ExpWorkBlock>
            </CollapseBlock>
            <CollapseBlock title="搜尋引擎專案">
              <ExpWorkBlock>
                <ExpResult>舊邏輯成功重構為 React 並複用至機票專案，降低雙專案維護成本。</ExpResult>
                <p>旅遊自由行模組從舊有邏輯改版至 React，整理共用邏輯，並套用至機票專案。</p>
                <TechTags techs={["React", "Hooks", "TypeScript", "Redux", "SCSS"]} />
              </ExpWorkBlock>
            </CollapseBlock>
            <CollapseBlock title="其他專案（會員、機票營運）">
              <ExpWorkBlock>
                <ExpResult>完成會員中心改版與機票營運頁，如期交付並符合設計規範。</ExpResult>
                <p>會員中心改版、登入註冊樣式與邏輯；機票營運頁面切版及套用共通元件。</p>
                <TechTags techs={["ejs", "CSS", "jQuery"]} />
              </ExpWorkBlock>
            </CollapseBlock>
          </StyledCardWrap>

          <StyledCardWrap>
            <ExpTitle>網頁設計師・2019/4 - 2019/9</ExpTitle>
            <CompanyName logo={eqsImg} alt="翼酷">翼酷情智股份有限公司</CompanyName>
            <ExpWorkBlock>
              <p>網頁程式設計、設計廣告 Banner、整合行銷策略、製作行銷企劃簡報。</p>
              <TechTags techs={["HTML5", "CSS3", "JavaScript"]} />
            </ExpWorkBlock>
          </StyledCardWrap>

          <StyledCardWrap>
            <ExpTitle>UI/UX 互動式網頁設計・2018/9 - 2019/3</ExpTitle>
            <CompanyName logo={iiiImg} alt="資策會" isSvg>資策會</CompanyName>
            <ExpWorkBlock>
              <p>學習 UX 分析、UI Flow、Wireframe 規劃及前後端開發與資料庫建置。專題：電商 RWD 網站（含後台購物系統）。</p>
              <TechTags techs={["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL", "Adobe XD"]} />
            </ExpWorkBlock>
          </StyledCardWrap>

        </StyledGrid>
      </StyledSection>
    </StyledExperience>
  );
};

const StyledExperience = styled.div`
  width: 100%;
`;

const StyledSection = styled.section`
  margin-bottom: 40px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledCardWrap = styled.div`
  position: relative;
  padding: 20px 20px 24px;
  color: var(--content-text);
  background: var(--cream-card);
  border-radius: 12px;
  border: 1px solid var(--cream-border);
  box-shadow: 0 2px 12px rgba(26, 42, 64, 0.06);
`;

const StyledCompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const StyledLogo = styled.img<{ isSvg?: boolean }>`
  flex-shrink: 0;
  height: 20px;
  width: auto;
  object-fit: contain;
  border-radius: ${({ isSvg }) => (isSvg ? "0" : "4px")};
  opacity: 0.85;
`;

const StyledTechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;

const StyledTechTag = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 20px;
  background: rgba(26, 42, 64, 0.06);
  color: var(--content-text);
  border: 1px solid var(--cream-border);
  white-space: nowrap;
  letter-spacing: 0.3px;
`;

const ExpTitle = styled.p`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--content-text);
  margin-bottom: 4px;
`;

const ExpContent = styled.p`
  letter-spacing: 0.4px;
  margin: 0;
  margin-top: 4px;
  font-size: 13px;
  color: var(--content-text-sub);
  word-break: break-word;
  line-height: 1.6;
`;

const ExpLabel = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--content-text-sub);
  margin: 12px 0 6px;
`;

const ExpAchievement = styled.p`
  margin: 0 0 10px;
  font-size: 12px;
  line-height: 1.6;
  color: #008080;
  font-weight: 600;
  letter-spacing: 0.4px;
`;

const ExpResult = styled.p`
  margin: 0 0 6px !important;
  font-size: 12px;
  font-weight: 600;
  color: var(--content-text);
  letter-spacing: 0.3px;
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(26, 42, 64, 0.04);
`;

const ExpWorkBlock = styled.div`
  padding: 10px 14px;
  border-radius: 6px;
  border-left: 2px solid var(--cream-border);
  background: var(--cream);
  letter-spacing: 0.4px;
  margin: 4px 0 6px;
  p {
    margin: 3px 0;
    font-size: 13px;
    line-height: 1.6;
    color: var(--content-text-sub);
  }
`;

export default Experience;
