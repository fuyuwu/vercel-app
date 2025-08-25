import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface WeatherData {
  observationTime: Date;
  locationName: string;
  temperature: number;
  windSpeed: number;
  humid: number;
  description: string;
  weatherCode: number;
  rainPossibility: number;
  comfortability: string;
}

interface WeatherState {
  currentWeather: WeatherData | null;
  forecast: any;
  isLoading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  settings: {
    temperatureUnit: 'celsius' | 'fahrenheit';
    language: 'zh' | 'en';
    autoRefresh: boolean;
  };
}

const initialState: WeatherState = {
  currentWeather: null,
  forecast: null,
  isLoading: false,
  error: null,
  lastUpdated: null,
  settings: {
    temperatureUnit: 'celsius',
    language: 'zh',
    autoRefresh: true,
  },
};

// 異步 action 來獲取天氣數據
export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (_, { rejectWithValue }) => {
    try {
      // 這裡可以調用你的天氣 API
      const response = await fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-50749C1B-35F3-4CA5-9CAD-99B79812FEEC&locationName=臺北');
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Failed to fetch weather data');
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherSettings: (state, action: PayloadAction<Partial<WeatherState['settings']>>) => {
      state.settings = { ...state.settings, ...action.payload };
    },
    clearWeatherError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentWeather = action.payload;
        state.lastUpdated = new Date();
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setWeatherSettings, clearWeatherError } = weatherSlice.actions;
export default weatherSlice.reducer;
