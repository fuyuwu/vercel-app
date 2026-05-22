import styled from "styled-components";
import { ISwitchProps } from "../Module";

export const StyledSwitch = styled.div`
  width: 100px;
  position: relative;
  margin-bottom: 5px;
  display: inline-block;
  > button {
    vertical-align: middle;
    width: 50px;
    height: 26px;
    background-color: ${(props: ISwitchProps) =>
      props.isOpen ? "#087ea4" : "rgba(255,255,255,0.15)"};
    border-radius: 13px;
    border: 1.5px solid
      ${(props: ISwitchProps) =>
        props.isOpen ? "#087ea4" : "rgba(255,255,255,0.3)"};
    box-sizing: border-box;
    cursor: ${(props: ISwitchProps) =>
      props.isDisabled ? "not-allowed" : "pointer"};
    padding: 0 3px;
    transition: all 300ms ease-in-out;
    outline: none;
    opacity: 1;

    &:after {
      content: "";
      width: 16px;
      height: 16px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
      transition: all 300ms ease-in-out;
      transform: ${(props: ISwitchProps) =>
        props.isOpen ? "translateX(24px)" : "translateX(0)"};
      display: block;
      position: relative;
    }
  }
  &.disabled {
    cursor: not-allowed;
    button {
      pointer-events: none;
      opacity: 0.4;
    }
  }
  > div {
    position: absolute;
    left: ${(props: ISwitchProps) => (props.isOpen ? "-1px" : "-10px")};
    top: -14px;
  }
`;

export const StyledSwitchText = styled.span`
  color: var(--light-font);
  font-size: 16px;
  vertical-align: middle;
  &:first-of-type {
    margin-right: 5px;
  }
  &:last-of-type {
    margin-left: 5px;
  }
`;
