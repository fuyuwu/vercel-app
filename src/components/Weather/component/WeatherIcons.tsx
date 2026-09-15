'use client';

import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import {
  Rainy,
  Thunderstrom,
  Cloudy,
  Fog,
  Snowing,
  NightStorm,
  NightCloud,
  NightSnowing,
  NightFog,
  NightRainy,
} from "../../Icons";

const weatherTypes = {
  isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
  // isClear: [1],
  isCloudy: [1, 2, 3, 4, 5, 6, 7],
  isFog: [24],
  isSnowing: [23, 37, 42],
  isRain: [8, 9, 10, 11, 12, 13, 14, 37, 38, 39],
};
const currentIcon = {
  day: {
    isThunderstorm: <Thunderstrom />,
    isCloudy: <Cloudy />,
    isFog: <Fog />,
    isSnowing: <Snowing />,
    isRain: <Rainy />,
  },
  night: {
    isThunderstorm: <NightStorm />,
    isCloudy: <NightCloud />,
    isFog: <NightFog />,
    isSnowing: <NightSnowing />,
    isRain: <NightRainy />,
  },
};
export type WeatherType = keyof typeof weatherTypes;

export const weatherCode2Type = (weatherCode: number): WeatherType | "" =>
  (Object.entries(weatherTypes) as [WeatherType, number[]][]).reduce<WeatherType | "">(
    (currentWeatherType, [weatherType, weatherCodes]) =>
      weatherCodes.includes(Number(weatherCode))
        ? weatherType
        : currentWeatherType,
    ""
  );

interface WeatherIconsProps {
  currentWeatherCode: number;
  moment: "day" | "night";
}

const WeatherIcons: React.FC<WeatherIconsProps> = ({ currentWeatherCode, moment }) => {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState<WeatherType>("isCloudy");

  const theWeatherIcon = useMemo(() => weatherCode2Type(currentWeatherCode), [
    currentWeatherCode,
  ]);

  useEffect(() => {
    if (theWeatherIcon) setCurrentWeatherIcon(theWeatherIcon);
  }, [theWeatherIcon]);
  return (
    <IconContainer>
      <IconContainer>{currentIcon[moment][currentWeatherIcon]}</IconContainer>
    </IconContainer>
  );
};

const IconContainer = styled.div`
  flex-basis: 30%;

  svg {
    margin-left: 10px;
    max-width: 80px;
    max-height: 110px;
  }
`;

export default WeatherIcons;
