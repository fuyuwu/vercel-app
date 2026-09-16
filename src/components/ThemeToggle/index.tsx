'use client';

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (e.g. private mode) — theme just won't persist
    }
  };

  return (
    <StyledToggle
      type="button"
      onClick={toggle}
      aria-label={isDark ? "切換成亮色主題" : "切換成暗色主題"}
      aria-pressed={isDark}
    >
      {isDark ? "🌙" : "☀️"}
    </StyledToggle>
  );
};

const StyledToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(241, 222, 198, 0.3);
  background: rgba(255, 255, 255, 0.06);
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(241, 222, 198, 0.6);
    background: rgba(255, 255, 255, 0.12);
  }
`;

export default ThemeToggle;
