'use client';

import React from "react";
import styled from "styled-components";
import DogCamp from "../PatrolDog/DogCamp";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledCampSpot>
        <DogCamp />
      </StyledCampSpot>
      <StyledCopyright>FuFu ©</StyledCopyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
  border-radius: 5px 5px;
  background: var(--dark-font);
`;

// Sits on the footer's top edge, outside the copyright block.
const StyledCampSpot = styled.div`
  position: absolute;
  right: 24px;
  bottom: 100%;
`;

const StyledCopyright = styled.p`
  text-align: center;
  letter-spacing: 2px;
  padding: 15px 0;
  color: var(--white);
  cursor: default;
`;

export default Footer;
