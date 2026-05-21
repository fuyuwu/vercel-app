import React from "react";
import styled from "styled-components";
import { theme } from "../../core";

interface IHeaderProps {
  title: string;
  scrolled?: boolean;
  children?: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ title, scrolled = false, children }) => {
  return (
    <StyledHeader scrolled={scrolled}>
      <StyledTitle>{title}</StyledTitle>
      {children && <StyledTabRow>{children}</StyledTabRow>}
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ scrolled }) => scrolled ? theme.mainTheme : "transparent"};
  box-shadow: ${({ scrolled }) => scrolled ? "0 2px 8px rgba(0,0,0,0.15)" : "none"};
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

const StyledTitle = styled.h1`
  margin: 10px 0;
  color: ${theme.lightFont};

  @media screen and (max-width: 679px) {
    display: none;
  }
`;

const StyledTabRow = styled.div`
  display: flex;
  gap: 4px;
`;

export default Header;
