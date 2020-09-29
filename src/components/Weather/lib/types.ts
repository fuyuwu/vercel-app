export interface IWeatherProps {
  observationTime: Date;
  locationName: string;
  humid: number;
  temperature: number;
  windSpeed: number;
  description: string;
  weatherCode: number;
  rainPossibility: number;
  comfortability: string;
  isLoading: boolean;
}
