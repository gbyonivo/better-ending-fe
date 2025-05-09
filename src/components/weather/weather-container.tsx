"use client";

import WeatherProvider from "@/context/weather";
import { WeatherSearch } from "./weather-search";

export const WeatherContainer = () => {
  return (
    <WeatherProvider>
      <WeatherSearch />
    </WeatherProvider>
  );
};
