import React, { useState, useEffect, useMemo } from "react";
import WeatherCard from "./component/WeatherCard";
import sunriseSunsetData from "./lib/sunrise-sunset.json";
import useWeatherApi from "./lib/useWeatherApi";

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

const WeatherApp: React.FC = () => {
  const [weatherElement, fetchData] = useWeatherApi();
  // const [currentTheme, setCurrentTheme] = useState("light");
  const { locationName }: any = weatherElement;

  const moment = useMemo(() => getMoment(locationName), [locationName]);

  // useEffect(() => {
  //   setCurrentTheme(moment === "day" ? "light" : "dark");
  // }, [moment]);

  return (
    <WeatherCard
      weatherElement={weatherElemen}
      moment={moment}
      fetchData={() => fetchData}
    />
  );
};

export default WeatherApp;
