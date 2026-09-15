'use client';

import { useRef, useState, useCallback, ReactNode } from "react";
import styled from "styled-components";

interface VirtualListProps<T> {
  items: T[];
  itemHeight: number;
  height: number;
  overscan?: number;
  renderItem: (item: T, index: number) => ReactNode;
}

function VirtualList<T>({
  items,
  itemHeight,
  height,
  overscan = 5,
  renderItem,
}: VirtualListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, []);

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + height) / itemHeight) + overscan
  );
  const visibleItems = items.slice(startIndex, endIndex + 1);

  return (
    <StyledContainer ref={containerRef} style={{ height }} onScroll={handleScroll}>
      <StyledInner style={{ height: totalHeight }}>
        {visibleItems.map((item, i) => {
          const index = startIndex + i;
          return (
            <StyledRow key={index} style={{ top: index * itemHeight, height: itemHeight }}>
              {renderItem(item, index)}
            </StyledRow>
          );
        })}
      </StyledInner>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  overflow-y: auto;
  position: relative;
  width: 100%;
  border: 1px solid rgba(26, 42, 64, 0.15);
`;

const StyledInner = styled.div`
  position: relative;
  width: 100%;
`;

const StyledRow = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

export default VirtualList;
