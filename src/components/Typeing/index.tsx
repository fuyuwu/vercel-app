'use client';

import React from 'react';
import { useTypeWriter } from './hook';
import styled from 'styled-components';

interface TypeingProps {
  text: string;
  speed?: number;
}

const Typeing: React.FC<TypeingProps> = ({text, speed = 100}) => {
  const { displayText, done } = useTypeWriter(text, speed);
  return (
    <StyledTypeing>
      <p>
        {displayText}
        <span className="cursor" />
      </p>
    </StyledTypeing>
  );
};



const StyledTypeing = styled.div`
  .cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background: currentColor;
    margin-left: 2px;
    vertical-align: text-bottom;
    animation: blink 0.75s step-end infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;


export default Typeing;