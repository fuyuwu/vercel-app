import * as React from "react";
import cx from "classnames";
import { ICommonProps } from "../../core";
import { StyledLoading } from "./scss/style";

export interface ILoadingProps extends ICommonProps {
  bgColor?: string;
  visible?: boolean;
  style?: React.CSSProperties;
}

const Module: React.FC<ILoadingProps> = (props) => {
  return (
    <>
      <StyledLoading
        className={cx("Loading", "ld-loading", props.className)}
        bgColor={props.bgColor}
        visible={props.visible}
        style={props.style}
      >
        <div className={cx("loading", props.className)}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </StyledLoading>
    </>
  );
};

export default Module;
