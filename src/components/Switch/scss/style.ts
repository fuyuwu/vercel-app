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
    background-color: ${(props: ISwitchProps) =>
      props.isOpen ? 'var(--primary-main)' : "var(--white)FFF"};
    border-radius: 11px;
    border: 1px solid
      ${(props: ISwitchProps) => (props.isOpen ? 'var(--primary-main)' : "#ECECEC")};
    box-sizing: border-box;
    cursor: ${(props: ISwitchProps) =>
      props.isDisabled ? "not-allowed" : "pointer"};
    padding: 0;
    transition: all 300ms ease-in-out;
    outline: none;
    opacity: 1;

    &:after {
      content: "";
      width: 20px;
      height: 20px;
      background-color: var(--white)fff;
      border-radius: 50%;
      box-shadow: 0px 1px 3px rgba(30, 30, 30, 0.3);
      transition: all 300ms ease-in-out;
      transform: ${(props: ISwitchProps) =>
        props.isOpen ? "translate(27px)" : "translate(0)"};
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
  color: var(--dark-font);
  font-size: 16px;
  vertical-align: middle;
  &:first-of-type {
    margin-right: 5px;
  }
  &:last-of-type {
    margin-left: 5px;
  }
`;
