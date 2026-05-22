import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WeatherCard from "./component/WeatherCard";
import useWeatherApi from "./lib/useWeatherApi";
import { ICity } from "./lib/types";

const CITIES: ICity[] = [
  { label: "臺北市", stationName: "臺北", forecastName: "臺北市", ipKeywords: ["Taipei", "Zhongzheng", "Xinyi"] },
  { label: "新北市", stationName: "淡水", forecastName: "新北市", ipKeywords: ["New Taipei", "Banqiao", "Xinzhuang"] },
  { label: "桃園市", stationName: "桃園", forecastName: "桃園市", ipKeywords: ["Taoyuan"] },
  { label: "臺中市", stationName: "臺中", forecastName: "臺中市", ipKeywords: ["Taichung"] },
  { label: "臺南市", stationName: "臺南", forecastName: "臺南市", ipKeywords: ["Tainan"] },
  { label: "高雄市", stationName: "高雄", forecastName: "高雄市", ipKeywords: ["Kaohsiung"] },
  { label: "基隆市", stationName: "基隆", forecastName: "基隆市", ipKeywords: ["Keelung"] },
  { label: "新竹市", stationName: "新竹", forecastName: "新竹市", ipKeywords: ["Hsinchu"] },
  { label: "宜蘭縣", stationName: "宜蘭", forecastName: "宜蘭縣", ipKeywords: ["Yilan"] },
  { label: "花蓮縣", stationName: "花蓮", forecastName: "花蓮縣", ipKeywords: ["Hualien"] },
  { label: "臺東縣", stationName: "臺東", forecastName: "臺東縣", ipKeywords: ["Taitung"] },
];

const DEFAULT_CITY = CITIES[0];

const getMoment = (): "day" | "night" => {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? "day" : "night";
};

const detectCityFromIp = async (): Promise<ICity> => {
  try {
    // ip-api.com 不允許 localhost 來源，換成 ipapi.co
    const res = await fetch("https://ipapi.co/json/");
    const data: { city: string; region: string } = await res.json();
    const keyword = `${data.city} ${data.region}`;
    const matched = CITIES.find((c) =>
      c.ipKeywords.some((k) => keyword.toLowerCase().includes(k.toLowerCase()))
    );
    return matched ?? DEFAULT_CITY;
  } catch {
    return DEFAULT_CITY;
  }
};

const Weather: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<ICity>(DEFAULT_CITY);
  const moment = getMoment();
  const { weather, fetchData } = useWeatherApi(selectedCity.stationName, selectedCity.forecastName);

  useEffect(() => {
    detectCityFromIp().then(setSelectedCity);
  }, []);

  return (
    <StyledWrap>
      <StyledSelector
        value={selectedCity.label}
        onChange={(e) => {
          const city = CITIES.find((c) => c.label === e.target.value) ?? DEFAULT_CITY;
          setSelectedCity(city);
        }}
      >
        {CITIES.map((c) => (
          <option key={c.label} value={c.label}>{c.label}</option>
        ))}
      </StyledSelector>
      <WeatherCard weather={weather} moment={moment} onRefresh={fetchData} />
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const StyledSelector = styled.select`
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid rgba(26, 42, 64, 0.25);
  background: #fff;
  color: #1A2A40;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  &:focus { border-color: #0077B6; }
`;

export default Weather;
