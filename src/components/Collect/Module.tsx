import React from "react";
import styled from "styled-components";
import Loading from "../Loading";
import { Heartf, Heart } from "../Icons";

interface ICollectProps {
  // currentId: string;
  onClick: (isFavorite: boolean) => void;
  isFavorite: boolean;
  isLoading?: boolean;
}

const Module: React.FC<ICollectProps> = (props) => {
  const onCollect = () => {
    if (props.onClick) {
      props.onClick(props.isFavorite);
      // props.onClick(props.currentId, props.isFavorite);
    }
  };

  return (
    <StyledBlock>
      {/* <Loading visible={props.isLoading} className={`${loadStyle}`} /> */}
      <StyledCollectBtn onClick={onCollect}>
        {props.isFavorite ? (
          <Heart width={18} height={18} fill={"var(--primary-main)"} />
        ) : (
          <Heartf width={18} height={18} fill={"var(--primary-main)"} />
        )}
      </StyledCollectBtn>
    </StyledBlock>
  );
};
const StyledBlock = styled.div`
  margin-top: 10px;
`;
const StyledCollectBtn = styled.a`
  cursor: pointer;
`;
export default Module;
