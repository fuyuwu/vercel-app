/** @summary 共用styles */
import styled, { CSSProperties } from "styled-components";
import { theme } from ".";

export const StyledCard = styled.div<{ id: string; visible: string }>`
  display: ${(props) => (props.visible === props.id ? "block" : "none")};
`;

export const StyledFlex = styled.div<{
  alignItems?: string;
  justContent?: string;
  direction?: string;
}>`
  display: flex;
  align-items: ${(props) => props.alignItems || "stretch"};
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justContent || "center"};
  @media screen and (min-width: 980px) {
    flex-direction: row;
  }
`;

export const StyledAbout = styled.div`
  margin: 20px 0;
`;

export const StyledSkillCard = styled.div<{
  padding?: string;
  showBg?: string;
  style?: CSSProperties;
}>`
  flex: 1;
  padding: ${(props) => (props.padding ? props.padding : "0px 10px 20px")};
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 5px;
  margin-bottom: 10px;
  background: ${(props) => props.showBg || "rgba(255, 255, 255, 0.5)"};
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    max-width: 100%;
  }
`;
export const StyledDivider = styled.div`
  width: 3px;
  background: ${theme.darkFont};
  margin: 20px 5px 0px 5px;
`;
export const StyledLine = styled.div<{
  lineStyle?: string;
  lineWeight?: number;
  borderColor?: string;
  marginTop?: string;
  marginBottom?: string;
}>`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0px"};
  height: 1px;
  border-bottom: ${(props) => (props.lineStyle ? props.lineStyle : "dashed")};
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : theme.darkFont};
  border-width: ${(props) => (props.lineWeight ? props.lineWeight : 5)}px;
`;
export const StyledTag = styled.a`
  display: inline-block;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 15px;
  margin: 10px 5px;
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
export const StyledAboutTitle = styled.p<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize || 20}px;
  font-weight: bold;
  letter-spacing: 0.8px;
  color: ${theme.darkFont};
  margin-bottom: 8px;
  font-family: "Mamelon";
  svg {
    vertical-align: middle;
    margin-right: 7px;
  }
`;
export const StyledLanguageBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledLanguage = styled.a`
  display: inline-block;
  padding: 0;
  margin: 0 auto;
  line-height: 40px;
  cursor: default;
  position: relative;
  /* flex: 1; */

  svg {
    vertical-align: middle;
  }
`;

export const StyledAboutContent = styled.p`
  letter-spacing: 0.8px;
  margin: 0;
  margin-top: 8px;
  font-size: 14px;
  word-break: break-word;
`;
export const StyledListul = styled.ul`
  margin-top: 8px;
  padding: 0;
`;
export const StyledAboutList = styled.li`
  list-style: none;
`;
export const StyledWorkBlock = styled.div`
  padding: 10px;
  border-radius: 5px;
  border: 3px solid ${theme.lightFont};
  letter-spacing: 2px;
  p {
    margin: 0;
    font-size: 14px;
  }
`;
export const StyledNextStep = styled.div<{ padding?: string }>`
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
