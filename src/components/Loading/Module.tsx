import * as React from "react";
import cx from "classnames";
import { ICommonProps } from "../../core";
import { StyledLoading } from "./scss/style";

export interface ILoadingProps extends ICommonProps {
  bgColor?: string;
  visible?: boolean;
  size?: "default" | "large";
  style?: React.CSSProperties;
}

const Module: React.FC<ILoadingProps> = (props) => {
  return (
    <>
      <StyledLoading
        className={cx("Loading", "ld-loading", props.className)}
        bgColor={props.bgColor}
        visible={props.visible}
        size={props.size}
        style={props.style}
      >
        <div className={cx("loading", props.className, props.size)}>
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
