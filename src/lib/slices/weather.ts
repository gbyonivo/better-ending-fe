import { WeatherState } from "@/types/states/weather-state";
import { DailyWeatherResponse } from "@/types/weather";
import { createDailyWeatherKey } from "@/utils/weather";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: WeatherState = {
  weather: null,
  fetching: false,
  errorFetching: null,
  cache: {},
  dailyWeatherRecord: {},
};

export const weatherSlice = createSlice({
  name: "_weather",
  initialState,
  reducers: {
    setDailyWeather: (
      state,
      { payload }: PayloadAction<DailyWeatherResponse>
    ) => {
      return {
        ...state,
        dailyWeatherRecord: {
          ...state.dailyWeatherRecord,
          [createDailyWeatherKey(payload.lat, payload.lon)]: payload,
        },
      };
    },
  },
});

export const { setDailyWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
