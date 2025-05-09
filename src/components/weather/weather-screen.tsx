"use client";

import { useSearchParams, useParams } from "next/navigation";
import { WeatherDailyContainer } from "./weather-daily-container";
import { WeatherDetailCard } from "./weather-detail-card";

export const WeatherScreen = () => {
  const searchParams = useSearchParams();
  const { city } = useParams();
  const lon = parseFloat(searchParams.get("lon") as string);
  const lat = parseFloat(searchParams.get("lat") as string);

  return (
    <div>
      <WeatherDailyContainer
        coordinates={{ lon, lat }}
        render={(dailyWeather) => (
          <div>
            <h2 className="text-2xl font-bold text-white text-center mt-8">
              {city}
            </h2>
            <h4 className="text-2xl font-bold text-white text-center">
              {dailyWeather.timezone}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
              {(dailyWeather.daily || []).map((weather) => (
                <WeatherDetailCard
                  key={weather.dt}
                  temperature={weather.temp.day}
                  condition={weather.weather[0].description}
                  dt={weather.dt}
                  windSpeed={weather.wind_speed}
                  humidity={weather.humidity}
                />
              ))}
            </div>
          </div>
        )}
      />
    </div>
  );
};
