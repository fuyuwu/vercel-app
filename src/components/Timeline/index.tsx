import React from 'react';
import styled from 'styled-components';
import { theme } from '../../core';

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  picture?: string;
  subtitle?: string;
  description?: string;
  skills?: string[];
  company?: string;
  location?: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  direction?: 'vertical' | 'horizontal';
  showConnectors?: boolean;
  animated?: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ 
  items, 
  direction = 'vertical',
  showConnectors = true,
  animated = true 
}) => {
  return (
    <StyledTimelineContainer direction={direction}>
      {items.map((item, index) => (
        <TimelineItemComponent
          key={item.id}
          item={item}
          index={index}
          total={items.length}
          direction={direction}
          showConnectors={showConnectors}
          animated={animated}
        />
      ))}
    </StyledTimelineContainer>
  );
};

const TimelineItemComponent: React.FC<{
  item: TimelineItem;
  index: number;
  total: number;
  direction: 'vertical' | 'horizontal';
  showConnectors: boolean;
  animated: boolean;
}> = ({ item, index, total, direction, showConnectors, animated }) => {
  
  return (
    <StyledTimelineItem 
      direction={direction}
      index={index}
      total={total}
      animated={animated}
    >
      <StyledTimelineContent>
        <StyledTimelineHeader>
          <StyledYear>{item.year}</StyledYear>
          <StyledTitle>{item.title}</StyledTitle>
          {item.picture && <StyledPicture src={item.picture} alt={item.title}/>}
          {item.subtitle && <StyledSubtitle>{item.subtitle}</StyledSubtitle>}
          {item.company && <StyledCompany>{item.company}</StyledCompany>}
          {item.location && <StyledLocation>{item.location}</StyledLocation>}
        </StyledTimelineHeader>
        
        <StyledDescription>{item.description}</StyledDescription>
        
        {item.skills && item.skills.length > 0 && (
          <StyledSkillsContainer>
            {item.skills.map((skill, skillIndex) => (
              <StyledSkillTag key={skillIndex}>
                {skill}
              </StyledSkillTag>
            ))}
          </StyledSkillsContainer>
        )}
      </StyledTimelineContent>
      
      {/* Center Timeline */}
      <StyledTimelineCenter>
        <StyledTimelineDot>
          {item.icon || (
            <StyledDefaultIcon>
              {item.year.split('-')[0]}
            </StyledDefaultIcon>
          )}
        </StyledTimelineDot>
        
        
        {showConnectors && index < total - 1 && (
          <StyledVerticalConnector />
        )}
      </StyledTimelineCenter>
    </StyledTimelineItem>
  );
};

// Styled Components
const StyledTimelineContainer = styled.div<{ direction: 'vertical' | 'horizontal' }>`
  display: flex;
  flex-direction: ${props => props.direction === 'vertical' ? 'column' : 'row'};
  gap: ${props => props.direction === 'vertical' ? '2rem' : '1rem'};
  position: relative;
  padding: 2rem 0;
  width: 100%;
  max-width: 100%;
  min-width: 0;
`;

const StyledTimelineItem = styled.div<{
  direction: 'vertical' | 'horizontal';
  index: number;
  total: number;
  animated: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.direction === 'vertical' ? 'row' : 'column'};
  align-items: ${props => props.direction === 'vertical' ? 'stretch' : 'center'};
  justify-content: center;
  position: relative;
  flex: ${props => props.direction === 'horizontal' ? '1' : 'none'};
  width: 100%;
  min-width: 0;
  margin-bottom: 2rem;
  
  ${props => props.animated && `
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out ${props.index * 0.1}s forwards;
    
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
`;

const StyledTimelineDot = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${theme.darkFont};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 12px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 2;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border: 2px solid ${theme.lightFont};
    border-radius: 50%;
    opacity: 0.3;
    z-index: -1;
  }
`;

const StyledDefaultIcon = styled.div`
  font-size: 10px;
  text-align: center;
  line-height: 1.2;
`;

const StyledConnector = styled.div<{ direction: 'vertical' | 'horizontal' }>`
  position: absolute;
  background: ${theme.darkFont};
  z-index: 1;
  
  ${props => props.direction === 'vertical' ? `
    width: 3px;
    height: 2rem;
    left: 28.5px;
    top: 60px;
  ` : `
    width: 2rem;
    height: 3px;
    top: 28.5px;
    left: 60px;
  `}
`;

const StyledTimelineContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 0;
  width: 100%;
  max-width: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  max-width: 45%;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledTimelineCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  width: 120px;
  height: 100%;
  min-height: 100%;
  
  /* 最後一個項目不顯示連接線 */
  &:last-child::after {
    display: none;
  }
`;

/* 創建從球體到內容的連接線 */
const StyledContentConnector = styled.div<{ isEven: boolean }>`
  position: absolute;
  top: 50%;
  left: ${props => props.isEven ? 'auto' : '50%'};
  right: ${props => props.isEven ? '50%' : 'auto'};
  transform: translateY(-50%);
  width: 3px;
  height: 2rem;
  background: ${theme.darkFont};
  z-index: 1;
  
  /* 左側連接線 */
  ${props => !props.isEven && `
    left: 50%;
    transform: translateY(-50%);
  `}
  
  /* 右側連接線 */
  ${props => props.isEven && `
    right: 50%;
    transform: translateY(-50%);
  `}
`;

/* 垂直時間線連接器 */
const StyledVerticalConnector = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 12rem;
  background: ${theme.darkFont};
  z-index: 1;
`;

const StyledPicture = styled.img`
  width: 80px;
  object-fit: contain;
  border-radius: 8px;
  border: 2px solid ${theme.lightFont};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 0.5rem 0;
`;

const StyledTimelineHeader = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const StyledYear = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.darkFont};
  margin-bottom: 0.5rem;
  background: ${theme.lightFont};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  display: inline-block;
`;

const StyledTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.darkFont};
  margin: 0.5rem 0;
  font-family: "Mamelon";
`;

const StyledSubtitle = styled.div`
  font-size: 16px;
  color: ${theme.darkFont};
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

const StyledCompany = styled.div`
  font-size: 14px;
  color: ${theme.darkFont};
  margin-bottom: 0.25rem;
`;

const StyledLocation = styled.div`
  font-size: 12px;
  color: ${theme.darkFont};
  opacity: 0.8;
`;

const StyledDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${theme.darkFont};
  margin: 0.5rem 0;
  width: 100%;
  word-wrap: break-word;
`;

const StyledSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 100%;
`;

const StyledSkillTag = styled.span`
  background: ${theme.lightFont};
  color: ${theme.darkFont};
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

export default Timeline;