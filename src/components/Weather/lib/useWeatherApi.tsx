'use client';

import { useState, useEffect, useCallback } from "react";
import { IWeatherData } from "./types";

const API_KEY = "CWA-202F5DD8-A198-4FE9-BDC1-A360826A18C9";
const BASE = "https://opendata.cwa.gov.tw/api/v1/rest/datastore";

const fetchObservation = async (stationName: string) => {
  const res = await fetch(
    `${BASE}/O-A0003-001?Authorization=${API_KEY}&StationName=${encodeURIComponent(stationName)}`
  );
  const data = await res.json();
  console.log("[O-A0003-001]", stationName, data.records);
  const station = data.records?.Station?.[0];
  if (!station) throw new Error(`Station not found: ${stationName}`);
  const el = station.WeatherElement;
  return {
    observationTime: station.ObsTime.DateTime as string,
    locationName: station.StationName as string,
    temperature: parseFloat(el.AirTemperature),
    windSpeed: parseFloat(el.WindSpeed),
    humid: parseFloat(el.RelativeHumidity),
  };
};

const fetchForecast = async (forecastName: string) => {
  const res = await fetch(
    `${BASE}/F-C0032-001?Authorization=${API_KEY}&locationName=${encodeURIComponent(forecastName)}`
  );
  const data = await res.json();
  const loc = data.records.location[0];
  const elements: Record<string, { parameterName: string; parameterValue: string }> =
    loc.weatherElement.reduce(
      (acc: Record<string, { parameterName: string; parameterValue: string }>, item: { elementName: string; time: { parameter: { parameterName: string; parameterValue: string } }[] }) => {
        if (["Wx", "PoP", "CI"].includes(item.elementName)) {
          acc[item.elementName] = item.time[0].parameter;
        }
        return acc;
      },
      {}
    );
  return {
    description: elements.Wx.parameterName,
    weatherCode: parseInt(elements.Wx.parameterValue),
    rainPossibility: parseInt(elements.PoP.parameterName),
    comfortability: elements.CI.parameterName,
  };
};

const useWeatherApi = (stationName: string, forecastName: string) => {
  const [weather, setWeather] = useState<IWeatherData>({
    observationTime: "",
    locationName: "",
    temperature: 0,
    windSpeed: 0,
    humid: 0,
    description: "",
    weatherCode: 1,
    rainPossibility: 0,
    comfortability: "",
    isLoading: true,
    isError: false,
  });

  const fetchData = useCallback(async () => {
    setWeather((prev) => ({ ...prev, isLoading: true, isError: false }));
    try {
      const [obs, forecast] = await Promise.all([
        fetchObservation(stationName),
        fetchForecast(forecastName),
      ]);
      setWeather({ ...obs, ...forecast, isLoading: false, isError: false });
    } catch {
      setWeather((prev) => ({ ...prev, isLoading: false, isError: true }));
    }
  }, [stationName, forecastName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { weather, fetchData };
};

export default useWeatherApi;
