import React from "react";
import styled from "styled-components";
import { theme } from "../../../core";
import { Rain, Air, Reload } from "../../Icons";
import WeatherIcons from "../component/WeatherIcons";
import Loading from "../../Loading";

const WeatherCard = (props) => {
  const { fetchData, weatherElement, moment } = props;
  const {
    obsTime,
    locationName,
    temperature,
    windSpeed,
    description,
    weatherCode,
    rainPossibility,
    comfortability,
    isLoading,
  } = weatherElement;

  return (
    <StyledWeatherCard>
      <StyledLocation>{locationName}</StyledLocation>
      <StyledDescription>
        {description} {comfortability}
      </StyledDescription>

      <StyledweatherElement>
        <StyledTemperature>
          {temperature}
          <StyledCelsius>°C</StyledCelsius>
        </StyledTemperature>
        <WeatherIcons
          currentWeatherCode={weatherCode}
          moment={moment || "day"}
        />
      </StyledweatherElement>
      <StyledAirFlow>
        <Air width={18} height={18} />
        {windSpeed} m/h
      </StyledAirFlow>
      <StyledRain>
        <Rain width={18} height={18} fill={"#00ACEA"} />
        {Math.round(rainPossibility)} %
      </StyledRain>

      {obsTime}
      {isLoading ? (
        <Loading className={"newPos"} visible={true} bgColor={theme.darkFont} />
      ) : (
        <StyledReload onClick={fetchData} isLoading={isLoading}>
          <Reload width={16} height={16} fill={theme.darkFont} />
        </StyledReload>
      )}
    </StyledWeatherCard>
  );
};
const StyledWeatherCard = styled.div`
  background-color: ${({ theme }) => theme.foregroundColor};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 30px 15px;
  font-family: "Mamelon";
`;

const StyledLocation = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.titleColor};
`;
const StyledDescription = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 30px;
  span {
    font-family: Arial, sans-serif;
  }
`;
const StyledweatherElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const StyledTemperature = styled.div`
  color: ${({ theme }) => theme.temperatureColor};
  font-size: 50px;
  font-weight: 300;
  display: flex;
`;
const StyledCelsius = styled.div`
  font-weight: normal;
  font-size: 25px;
  color: #aaa;
`;
const StyledReload = styled.div<{ isLoading: boolean }>`
  text-align: right;
  cursor: pointer;
  margin-bottom: -18px;
  color: ${({ theme }) => theme.textColor};
  svg {
    fill: ${({ theme }) => theme.textColor};
    margin-left: 10px;
    cursor: pointer;
    animation: rotate infinite 1.5s linear;
    animation-duration: ${(props) => (props.isLoading ? "1.5s" : "0s")};
  }
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

const StyledAirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 20px;
  svg {
    margin-right: 30px;
  }
`;

const StyledRain = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  svg {
    margin-right: 30px;
  }
`;

export default WeatherCard;
