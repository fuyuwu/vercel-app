import * as React from "react";
import cx from "classnames";
import { ICommonProps } from "../../core";
import { StyledSwitch, StyledSwitchText } from "./scss/style";
import Loading from "../Loading";

export interface ISwitchProps extends ICommonProps {
  onClick?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  isOpen?: boolean;
  text?: string[];
}

const Module: React.FC<ISwitchProps> = (props) => {
  const handlerClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <>
      <StyledSwitch
        isLoading={props.isLoading}
        className={cx(
          "Switch",
          "ld-switch",
          props.className,
          props.isDisabled ? "disabled" : ""
        )}
        isDisabled={props.isDisabled}
        isOpen={props.isOpen}
      >
        {props.text && <StyledSwitchText>{props.text[0]}</StyledSwitchText>}
        <button type="button" onClick={handlerClick}></button>
        {props.text && <StyledSwitchText>{props.text[1]}</StyledSwitchText>}
        {props.isLoading ? (
          <Loading
            className={"default"}
            bgColor={"#fa8072"}
            visible={true}
          />
        ) : (
          ""
        )}
      </StyledSwitch>
    </>
  );
};

Module.defaultProps = {
  onClick: () => console.log("Switch"),
};

export default Module;
