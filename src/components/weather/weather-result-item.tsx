import { formatDate } from "@/utils/date";
import { Coordinates, Weather } from "@/types/weather";
import { WeatherDesciptionItem } from "./weather-description-line";
import { ClickableText } from "../common/clickable-text";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { WeatherDailyContainer } from "./weather-daily-container";
import { WeatherNextDays } from "./weather-next-day";

interface WeatherResultItemProps {
  weather: Weather;
}

export const WeatherResultItem = ({ weather }: WeatherResultItemProps) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: null,
    lon: null,
  });
  const router = useRouter();
  const descriptionLines = [
    { label: "Temp", description: weather.main.temp },
    { label: "Feels like", description: weather.main.feels_like },
    { label: "Temp min", description: weather.main.temp_min },
    { label: "Temp max", description: weather.main.temp_max },
  ];

  useEffect(() => {
    setCoordinates({
      lat: null,
      lon: null,
    });
  }, [weather]);

  return (
    <div className="w-64 sm:w-full">
      <div className="bg-blue-800 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm p-4 w-full">
        <div className="p-2 relative">
          <div className="sm:flex mb-4 justify-between items-center">
            <div>
              <h5 className="mb-0 font-medium text-xl">
                {weather.name}, {weather.sys.country}
              </h5>
              <h6 className="mb-0">
                {formatDate({
                  date: weather.dt * 1000,
                  formatString: "MMMM dd",
                })}
              </h6>
            </div>
            <div className="text-right">
              <h3 className="font-bold text-4xl mb-0 text-left sm:text-left">
                <span>{weather.main.temp}&deg;</span>
              </h3>
            </div>
          </div>
          <div className="block sm:flex justify-between items-center flex-wrap">
            {descriptionLines.map(({ label, description }) => (
              <WeatherDesciptionItem
                key={label}
                label={label}
                description={description}
              />
            ))}
          </div>
        </div>
        <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap">
          <span className="inline-block">
            <ClickableText
              onClick={() => {
                setCoordinates({
                  lat: weather.coord.lat,
                  lon: weather.coord.lon,
                });
              }}
              text="See 3 Day Forecast"
            />
          </span>
        </div>
        <WeatherDailyContainer
          coordinates={coordinates}
          className="mx-2 text-xs"
          render={(dailyWeather) => (
            <div className="flex flex-row justify-between">
              {(dailyWeather.daily || []).slice(1, 4).map((daily) => (
                <WeatherNextDays
                  key={daily.dt}
                  dt={daily.dt}
                  temp={daily.temp.day}
                />
              ))}
            </div>
          )}
        />
      </div>
      <ClickableText
        onClick={() => {
          router.push(
            `/weather/${weather.name}?lat=${weather.coord.lat}&lon=${weather.coord.lon}`
          );
        }}
        className="mt-4 text-right"
        text="See Detailed Forecast"
      />
    </div>
  );
};
