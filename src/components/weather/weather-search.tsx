"use client";

import { SearchParams } from "../common/search-params";
import { WeatherResult } from "./weather-result";

export function WeatherSearch() {
  return (
    <SearchParams
      searchKey="city"
      label="City"
      subLabel="Enter Name of City"
      render={(search) => <WeatherResult city={search} className="mt-4" />}
    />
  );
}
