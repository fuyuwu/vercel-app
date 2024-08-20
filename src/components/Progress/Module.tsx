import React from "react";
import styled from "styled-components";
import { ICommonProps } from "../../core/type";

interface IProgress extends ICommonProps {
  color: string;
  percent: number;
  max?: number;
  font?: string;
}

const Progress: React.FC<IProgress> = (props) => {
  return (
    <StyledBlock>
      <StyledBar>
        <StyledPercent percent={props.percent}>
          <progress value={props.percent} max={100} />
          {/* <StyledLabel>{`${props.percent}%`}</StyledLabel> */}
          <StyledFont>{props.font}</StyledFont>
        </StyledPercent>
      </StyledBar>
    </StyledBlock>
  );
};
Progress.defaultProps = {
  color: "#aaa",
  max: 100,
};
const StyledBlock = styled.div`
  width: calc(100 % - 90px);
  /* flex: 1; */
`;
const StyledBar = styled.div`
  height: 20px;
  margin: 0 10px;
`;
const StyledPercent = styled.div<{ percent: number }>`
  height: 20px;
  width: ${(props) => props.percent};
  border-radius: inherit;
  text-align: right;
  transition: width 1s ease-in-out;
  progress {
    border-radius: 7px;
  }
  progress::-webkit-progress-bar {
    background-color: var(--primary-main);
    border-radius: 7px;
  }
  progress::-webkit-progress-value {
    background-color: var(--dark-font);
    border-radius: 7px;
    transition: width 0.5s ease-in-out;
  }
  progress::-moz-progress-bar {
    border-radius: 7px;
  }
`;
const StyledLabel = styled.span<{ color?: string }>`
  padding: 5px;
  color: ${(props) => props.color};
  font-weight: bold;
`;
const StyledFont = styled.span`
  font-size: 8px;
  letter-spacing: 0.8px;
  padding: 5px 10px;
  white-space: nowrap;
`;

export default Progress;
