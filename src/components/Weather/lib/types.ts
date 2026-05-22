export interface IWeatherData {
  observationTime: string;
  locationName: string;
  temperature: number;
  windSpeed: number;
  humid: number;
  description: string;
  weatherCode: number;
  rainPossibility: number;
  comfortability: string;
  isLoading: boolean;
  isError: boolean;
}

export interface ICity {
  label: string;
  stationName: string;
  forecastName: string;
  ipKeywords: string[];
}
