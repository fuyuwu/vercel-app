import React, { useState, useEffect } from "react";
import { Fold, Unfold } from "../Icons";
import styled from "styled-components";
import { theme } from "../../core";

interface ICollapseBlockProps {
  title: string | React.ReactNode;
  defaultState?: "open" | "close";
}

const CollapseBlock: React.FC<ICollapseBlockProps> = (props) => {
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    if (props.defaultState === "open") {
      setActive(true);
    }
  }, []);
  return (
    <div>
      <StyledBlock>
        {active ? (
          <a
            onClick={() => {
              setActive(!active);
            }}
          >
            {typeof props.title !== "string" ? (
              props.title
            ) : (
              <StyledTitle>{props.title}</StyledTitle>
            )}
            <Fold />
          </a>
        ) : (
          <a
            onClick={() => {
              setActive(!active);
            }}
          >
            {typeof props.title !== "string" ? (
              props.title
            ) : (
              <StyledTitle>{props.title}</StyledTitle>
            )}
            <Unfold />
          </a>
        )}
      </StyledBlock>
      {active ? <div>{props.children}</div> : null}
    </div>
  );
};
const StyledBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    cursor: pointer;
    svg {
      cursor: pointer;
      vertical-align: middle;
    }
  }
`;
const StyledTitle = styled.span`
  display: inline-block;
  padding: 5px 10px;
  color: ${theme.darkFont};
  letter-spacing: 0.8px;
  font-size: 14px;
  font-weight: bold;
`;
export default CollapseBlock;
CollapseBlock.defaultProps = {
  defaultState: "close",
};
