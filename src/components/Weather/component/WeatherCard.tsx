import React from "react";
import styled from "styled-components";
import { theme } from "../../../core";
import { Rain, Air, Reload, Loader } from "../../Icons";
// import { IWeatherProps } from "../lib/types";
import WeatherIcons from "../component/WeatherIcons";

interface IWeatherCardProps {
  fetchData: () => void;
  weatherElement?: {
    obsTime: Date;
    locationName: string;
    humid: number;
    temperature: number;
    windSpeed: number;
    description: string;
    weatherCode: number;
    rainPossibility: number;
    comfortability: string;
    isLoading: boolean;
  };
  moment: "day" | "night";
}

const weatherTheme = {
  light: {
    backgroundColor: "#ededed",
    boxShadow: "0 1px 3px 0 #999999",
    titleColor: "#212121",
    temperatureColor: "#757575",
    textColor: "#828282",
  },
  dark: {
    backgroundColor: "#1F2022",
    boxShadow:
      "0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)",
    titleColor: "#f9f9fa",
    temperatureColor: "#dddddd",
    textColor: "#cccccc",
  },
};

const WeatherCard: React.FC<IWeatherCardProps> = ({
  fetchData,
  weatherElement,
  moment,
}) => {
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
    <StyledContainer>
      <StyledWeatherCard theme={moment}>
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
        <StyledReload onClick={fetchData} isLoading={isLoading}>
          {obsTime}
          {isLoading ? (
            <Loader />
          ) : (
            <Reload width={16} height={16} fill={theme.darkFont} />
          )}
        </StyledReload>
      </StyledWeatherCard>
    </StyledContainer>
  );
};

const StyledLocation = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
  color: ${theme.darkFont};
`;
const StyledDescription = styled.div`
  font-size: 16px;
  color: ${theme.darkFont};
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
  color: ${theme.darkFont};
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
  svg {
    margin-left: 10px;
    cursor: pointer;
    animation-duration: ${({ isLoading }) => (isLoading ? "1.5s" : "0s")};
    animation: rotate infinite 1.5s linear;
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
  color: ${theme.darkFont};
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
  color: ${theme.darkFont};
  svg {
    margin-right: 30px;
  }
`;
const StyledContainer = styled.div`
  font-family: "Mamelon";
  display: flex;
  align-items: center;
  @media screen and (min-width: 980px) {
    width: 360px;
    margin: 0 10px 0 0;
  }
`;

const StyledWeatherCard = styled.div`
  position: relative;
  flex: 1;
  box-shadow: 0 1px 3px 0 #999999;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 30px 15px;
`;
export default WeatherCard;
