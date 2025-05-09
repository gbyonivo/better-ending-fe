"use client";

import { useSearchParams } from "next/navigation";
import { WeatherDailyContainer } from "./weather-daily-container";

export const WeatherScreen = () => {
  const searchParams = useSearchParams();
  const lon = parseFloat(searchParams.get("lon") as string);
  const lat = parseFloat(searchParams.get("lat") as string);

  console.log(lon, lat, searchParams);

  return (
    <div>
      hello
      <WeatherDailyContainer
        coordinates={{ lon, lat }}
        render={(dailyWeather) => <div>{dailyWeather.length} ddd</div>}
      />
    </div>
  );
};
