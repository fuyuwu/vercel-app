'use client';

import React from "react";
import styled, { keyframes } from "styled-components";
import { Air, Rain, Reload } from "../../Icons";
import WeatherIcons from "./WeatherIcons";
import { IWeatherData } from "../lib/types";

interface Props {
  weather: IWeatherData;
  moment: "day" | "night";
  onRefresh: () => void;
}

const WeatherCard: React.FC<Props> = ({ weather, moment, onRefresh }) => {
  const {
    locationName,
    temperature,
    windSpeed,
    description,
    weatherCode,
    rainPossibility,
    comfortability,
    observationTime,
    isLoading,
    isError,
  } = weather;

  const obsLabel = observationTime
    ? new Date(observationTime).toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
    : "--:--";

  return (
    <StyledCard>
      <StyledTop>
        <div>
          <StyledLocation>{locationName || "---"}</StyledLocation>
          <StyledDesc>
            {isError ? "資料載入失敗" : `${description} ${comfortability}`}
          </StyledDesc>
        </div>
        <StyledRefresh onClick={onRefresh} disabled={isLoading}>
          <StyledReloadIcon isLoading={isLoading}>
            <Reload width={16} height={16} />
          </StyledReloadIcon>
        </StyledRefresh>
      </StyledTop>

      <StyledMain>
        <StyledTempRow>
          <StyledTemp>
            {isError ? "--" : Math.round(temperature)}
            <StyledUnit>°C</StyledUnit>
          </StyledTemp>
          <WeatherIcons currentWeatherCode={weatherCode} moment={moment} />
        </StyledTempRow>

        <StyledMeta>
          <StyledMetaItem>
            <Air width={16} height={16} />
            <span>{isError ? "--" : `${windSpeed} m/s`}</span>
          </StyledMetaItem>
          <StyledMetaItem>
            <Rain width={16} height={16} fill="#0077B6" />
            <span>{isError ? "--" : `${rainPossibility}%`}</span>
          </StyledMetaItem>
          <StyledTime>{obsLabel}</StyledTime>
        </StyledMeta>
      </StyledMain>
    </StyledCard>
  );
};

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledCard = styled.div`
  width: 100%;
  max-width: 320px;
  background: #1A2A40;
  border-radius: 16px;
  padding: 20px 24px 16px;
  margin: 0 20px;
  color: #F1DEC6;
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const StyledLocation = styled.h3`
  margin: 0 0 4px;
  font-size: 22px;
  font-weight: 700;
  color: #F1DEC6;
`;

const StyledDesc = styled.p`
  margin: 0;
  font-size: 13px;
  color: rgba(241, 222, 198, 0.6);
`;

const StyledRefresh = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: rgba(241, 222, 198, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  &:hover { color: #F1DEC6; }
  &:disabled { cursor: not-allowed; opacity: 0.4; }
`;

const StyledReloadIcon = styled.span<{ isLoading: boolean }>`
  display: flex;
  animation: ${({ isLoading }) => isLoading ? spin : "none"} 1s linear infinite;
  svg { fill: currentColor; }
`;

const StyledMain = styled.div``;

const StyledTempRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const StyledTemp = styled.div`
  font-size: 56px;
  font-weight: 300;
  line-height: 1;
  display: flex;
  align-items: flex-start;
  gap: 2px;
  color: #F1DEC6;
`;

const StyledUnit = styled.span`
  font-size: 22px;
  font-weight: 400;
  margin-top: 8px;
  color: rgba(241, 222, 198, 0.65);
`;

const StyledMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(241, 222, 198, 0.1);
`;

const StyledMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgba(241, 222, 198, 0.7);
  svg { flex-shrink: 0; }
`;

const StyledTime = styled.span`
  margin-left: auto;
  font-size: 12px;
  color: rgba(241, 222, 198, 0.35);
`;

export default WeatherCard;
