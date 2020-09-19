import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../core";
import Collect from "../Collect";

interface ICardProps {
  cardTitle: string;
  cardId?: string;
}

const Card: React.FC<ICardProps> = (props) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onCollectBtn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsFavorite(!isFavorite);
    }, 1000);
  };
  return (
    <StyledCard cardId={props.cardId}>
      <StyledFlex>
        <div style={{ position: "absolute", top: 0, right: 10 }}>
          <Collect
            onClick={onCollectBtn}
            isFavorite={isFavorite}
            isLoading={isLoading}
          />
        </div>
        <div style={{ textAlign: "center", lineHeight: "30px" }}>
          <StyledTitle>{props.cardTitle}</StyledTitle>
          {props.children}
        </div>
      </StyledFlex>
    </StyledCard>
  );
};
const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledCard = styled.div<{ cardId?: string }>`
  flex: 1;
  border: 1px solid #fff;
  margin: 0 5px;
  padding: 20px 0px;
  box-shadow: 0 1px 3px 0 #999999;
  /* background-color: #f9f9f9; */
  background: ${theme.darkFont};
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
`;
const StyledTitle = styled.p`
  color: ${theme.normalFont};
  margin: 5px 0;
`;

export default Card;
