import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";

interface IExperienceProps {
  tabId: string;
}

const Experience: React.FC<IExperienceProps> = ({ tabId }) => {
  const currentTabId = useAppSelector(state => state.tab.currentTabId);
  if (currentTabId !== tabId) return null
  return (
    <StyledExperience>
      <h2>Experience</h2>
    </StyledExperience>
  );
};

const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Experience;