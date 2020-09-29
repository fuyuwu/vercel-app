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
  isClear: [1],
  isCloudy: [2, 3, 4, 5, 6, 7],
  isFog: [24],
  isSnowing: [23, 37, 42],
  isRain: [37, 38, 39],
};
const currentIcon = {
  day: {
    isThunderstorm: <Thunderstrom width={24} height={24} />,
    isCloudy: <Cloudy width={24} height={24} />,
    isFog: <Fog width={24} height={24} />,
    isSnowing: <Snowing width={24} height={24} />,
    isRain: <Rainy width={24} height={24} />,
  },
  night: {
    isThunderstorm: <NightStorm width={24} height={24} />,
    isCloudy: <NightCloud width={24} height={24} />,
    isFog: <NightFog width={24} height={24} />,
    isSnowing: <NightSnowing width={24} height={24} />,
    isRain: <NightRainy width={24} height={24} />,
  },
};
const weatherCode2Type = (weatherCode) =>
  Object.entries(weatherTypes).reduce(
    (currentWeatherType, [weatherType, weatherCodes]) =>
      weatherCodes.includes(Number(weatherCode))
        ? weatherType
        : currentWeatherType,
    ""
  );

const WeatherIcons = ({ currentWeatherCode, moment }) => {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState("isClear");

  const theWeatherIcon = useMemo(() => weatherCode2Type(currentWeatherCode), [
    currentWeatherCode,
  ]);

  useEffect(() => {
    setCurrentWeatherIcon(theWeatherIcon);
  }, [theWeatherIcon]);

  return (
    <IconContainer>{currentIcon[moment][currentWeatherIcon]}</IconContainer>
  );
};

const IconContainer = styled.div`
  flex-basis: 30%;

  svg {
    max-height: 110px;
  }
`;

export default WeatherIcons;
