import React from "react";
import styled from "styled-components";
import { theme } from "../../core";

interface ICardProps {
  cardTitle: string;
}

const Card: React.FC<ICardProps> = (props) => {
  return (
    <StyledCard>
      <div style={{ textAlign: "center", lineHeight: "30px" }}>
        <StyledTitle>{props.cardTitle}</StyledTitle>
        {props.children}
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  flex: 1;
  border: 1px solid #fff;
  margin: 0 5px;
  padding: 20px 0px;
  box-shadow: 0 1px 3px 0 #999999;
  /* background-color: #f9f9f9; */
  background: ${theme.darkFont};
  border-radius: 5px;
  box-sizing: border-box;
`;
const StyledTitle = styled.p`
  color: ${theme.normalFont};
  margin: 5px 0;
`;

export default Card;
