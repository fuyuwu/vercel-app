'use client';

import { useState, useEffect, useCallback } from "react";
import { IPokemonListItem } from "./types";

const API_BASE = "https://pokeapi.co/api/v2/pokemon";
const SPRITE_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

interface IPokeApiResult {
  name: string;
  url: string;
}

const getIdFromUrl = (url: string): number => {
  const segments = url.split("/").filter(Boolean);
  return Number(segments[segments.length - 1]);
};

const usePokemonList = (limit = 1302) => {
  const [pokemons, setPokemons] = useState<IPokemonListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch(`${API_BASE}?limit=${limit}&offset=0`);
      const data: { results: IPokeApiResult[] } = await res.json();
      const list: IPokemonListItem[] = data.results.map((item) => {
        const id = getIdFromUrl(item.url);
        return {
          id,
          name: item.name,
          imageUrl: `${SPRITE_BASE}/${id}.png`,
        };
      });
      setPokemons(list);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { pokemons, isLoading, isError, refetch: fetchData };
};

export default usePokemonList;
