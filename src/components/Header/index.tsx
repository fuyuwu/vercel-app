'use client';

import React from "react";
import styled from "styled-components";
import { theme } from "../../core";

interface NavItem {
  label: string;
  href: string;
}

interface IHeaderProps {
  scrolled?: boolean;
  navItems?: NavItem[];
}

const Header: React.FC<IHeaderProps> = ({ scrolled = false, navItems = [] }) => {
  return (
    <StyledHeader scrolled={scrolled}>
      <StyledNav>
        {navItems.map(({ label, href }) => (
          <StyledNavLink key={href} href={href}>
            {label}
          </StyledNavLink>
        ))}
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 0 32px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${({ scrolled }) => scrolled ? "rgba(0,128,128,0.95)" : "transparent"};
  backdrop-filter: ${({ scrolled }) => scrolled ? "blur(8px)" : "none"};
  box-shadow: ${({ scrolled }) => scrolled ? "0 1px 20px rgba(0,0,0,0.12)" : "none"};
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const StyledNavLink = styled.a`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(241, 222, 198, 0.6);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: rgba(241, 222, 198, 1);
  }
`;

export default Header;
