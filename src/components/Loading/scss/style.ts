import styled from "styled-components";
import { ILoadingProps } from "../Module";

export const StyledLoading = styled.div<ILoadingProps>`
  position: relative;
  display: inline-block;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  .loading {
    display: inline-block;
    position: relative;

    &.large {
      top: -20px;
      left: 50%;
    }
    &.default {
      top: -30px;
      left: -2px;
    }
    div {
      position: relative;
      transform-origin: 41px 40px;
      animation: loading 1.2s linear infinite;
      :after {
        content: "";
        display: block;
        position: absolute;
        top: 38px;
        left: 44px;
        width: 3px;
        height: 2px;
        /* top: 40px;
        left: 52px;
        width: 12px;
        height: 3px; */
        border-radius: 50%;
        background: ${(props) => (props.bgColor ? props.bgColor : "#989898")};
      }
      &:after {
        .large {
          top: 38px;
          left: 50px;
          width: 20px;
          height: 5px;
        }
        .default {
          top: 38px;
          left: 48px;
          width: 12px;
          height: 4px;
        }
      }
    }
    div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    div:nth-child(2) {
      transform: rotate(45deg);
      animation-delay: -1s;
    }
    div:nth-child(3) {
      transform: rotate(90deg);
      animation-delay: -0.9s;
    }
    div:nth-child(4) {
      transform: rotate(135deg);
      animation-delay: -0.8s;
    }
    div:nth-child(5) {
      transform: rotate(180deg);
      animation-delay: -0.7s;
    }
    div:nth-child(6) {
      transform: rotate(225deg);
      animation-delay: -0.6s;
    }
    div:nth-child(7) {
      transform: rotate(270deg);
      animation-delay: -0.5s;
    }
    div:nth-child(8) {
      transform: rotate(315deg);
      animation-delay: -0.4s;
    }
    div:nth-child(9) {
      transform: rotate(360deg);
      animation-delay: -0.3s;
    }
  }
  @keyframes loading {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
