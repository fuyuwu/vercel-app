import React, { useState, useEffect, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import WeatherCard from "./component/WeatherCard";
import sunriseSunsetData from "./lib/sunrise-sunset.json";
// import useWeatherApi from "./lib/useWeatherApi";

const theme = {
  light: {
    backgroundColor: "#f9f9f9",
    foregroundColor: "#f9f9f9",
    boxShadow: "0 1px 3px 0 #999999",
    titleColor: "#212121",
    temperatureColor: "#757575",
    textColor: "#828282",
  },
  dark: {
    backgroundColor: "#121416",
    foregroundColor: "#121416",
    boxShadow:
      "0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)",
    titleColor: "#f9f9fa",
    temperatureColor: "#dddddd",
    textColor: "#cccccc",
  },
};

const getMoment = (locationName) => {
  const location = sunriseSunsetData.find(
    (data) => data.locationName === locationName
  );

  if (!location) return null;

  const now = new Date();
  const nowDate = Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(now)
    .replace(/\//g, "-");

  const locationDate =
    location.time && location.time.find((time) => time.dataTime === nowDate);
  const sunriseTimestamp = new Date(
    `${locationDate.dataTime} ${locationDate.sunrise}`
  ).getTime();
  const sunsetTimestamp = new Date(
    `${locationDate.dataTime} ${locationDate.sunset}`
  ).getTime();
  const nowTimeStamp = now.getTime();

  return sunriseTimestamp <= nowTimeStamp && nowTimeStamp <= sunsetTimestamp
    ? "day"
    : "night";
};

const StyledContainer = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0px;
  @media screen and (min-width: 980px) {
    margin-right: 10px;
    width: 290px;
  }
`;

const WeatherApp: React.FC = () => {
  // const [weatherElement, fetchData] = useWeatherApi();
  const [currentTheme, setCurrentTheme] = useState("dark");
  // const { locationName }: any = weatherElement;

  // const moment = useMemo(() => getMoment(ßlocationName), [locationName]);

  // useEffect(() => {
  //   setCurrentTheme(moment === "day" ? "light" : "dark");
  // }, [moment]);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <StyledContainer>
        {/* <WeatherCard
          weatherElement={weatherElement}
          moment={moment}
          fetchData={fetchData}
        /> */}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default WeatherApp;
