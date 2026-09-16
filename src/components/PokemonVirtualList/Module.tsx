'use client';

import React from "react";
import styled from "styled-components";
import VirtualList from "./component/VirtualList";
import PokemonCard from "./component/PokemonCard";
import usePokemonList from "./lib/usePokemonList";
import { IPokemonListItem } from "./lib/types";

const COLUMNS = 3;
const VISIBLE_ROWS = 3;
const ROW_HEIGHT = 84;
const LIST_HEIGHT = ROW_HEIGHT * VISIBLE_ROWS;

const chunk = (items: IPokemonListItem[], size: number): IPokemonListItem[][] => {
  const rows: IPokemonListItem[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
};

const PokemonVirtualList: React.FC = () => {
  const { pokemons, isLoading, isError, refetch } = usePokemonList();

  if (isLoading) return <StyledStatus>載入中...</StyledStatus>;
  if (isError) {
    return (
      <StyledStatus>
        資料載入失敗
        <StyledRetry onClick={refetch}>重試</StyledRetry>
      </StyledStatus>
    );
  }

  const rows = chunk(pokemons, COLUMNS);

  return (
    <StyledWrap>
      <StyledCount>共 {pokemons.length} 筆寶可夢資料</StyledCount>
      <VirtualList
        items={rows}
        itemHeight={ROW_HEIGHT}
        height={LIST_HEIGHT}
        renderItem={(row) => (
          <StyledGridRow>
            {row.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </StyledGridRow>
        )}
      />
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 320px;
`;

const StyledGridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(${COLUMNS}, 1fr);
  height: 100%;
`;

const StyledCount = styled.span`
  font-size: 13px;
  color: rgba(26, 42, 64, 0.5);
`;

const StyledStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px;
  font-size: 14px;
  color: rgba(26, 42, 64, 0.6);
`;

const StyledRetry = styled.button`
  border: 1px solid rgba(26, 42, 64, 0.25);
  background: #fff;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 13px;
  cursor: pointer;
  color: #1a2a40;
  &:hover { border-color: #0077b6; color: #0077b6; }
`;

export default PokemonVirtualList;
