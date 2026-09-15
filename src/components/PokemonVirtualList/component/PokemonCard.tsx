'use client';

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { IPokemonListItem } from "../lib/types";

interface Props {
  pokemon: IPokemonListItem;
}

const capitalize = (name: string) => name.charAt(0).toUpperCase() + name.slice(1);

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <StyledCard>
      <StyledId>#{String(pokemon.id).padStart(4, "0")}</StyledId>
      <StyledImage src={pokemon.imageUrl} alt={pokemon.name} width={36} height={36} loading="lazy" />
      <StyledName>{capitalize(pokemon.name)}</StyledName>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  height: 100%;
  padding: 6px 4px;
  background: #fff;
`;

const StyledId = styled.span`
  font-size: 10px;
  color: rgba(26, 42, 64, 0.4);
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const StyledName = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #1a2a40;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default PokemonCard;
