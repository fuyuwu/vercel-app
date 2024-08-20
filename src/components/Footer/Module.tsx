import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledCopyright>FuFu © 2020</StyledCopyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  border-radius: 5px 5px;
  background: var(--dark-font);
`;

const StyledCopyright = styled.p`
  text-align: center;
  font-family: "Mamelon";
  letter-spacing: 2px;
  padding: 15px 0;
  color: var(--white);
  cursor: default;
`;

export default Footer;
