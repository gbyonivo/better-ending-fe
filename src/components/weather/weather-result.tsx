"use client";

import { useCallback, useContext, useEffect } from "react";
import { WeatherContext } from "@/context/weather";
import { WeatherActionType } from "@/types/weather-action-type";
import axios from "axios";
import { Spinner } from "../common/spinner";
import { DescriptionLine } from "../common/description-line";
import { formatDate } from "@/utils/date";
import { ClickableText } from "../common/clickable-text";

interface Props {
  city: string;
  className?: string;
}

export function WeatherResult({ city, className }: Props) {
  const { dispatch, weather, fetching, errorFetching } =
    useContext(WeatherContext);

  console.log(weather, fetching, errorFetching);

  // TODO:add designs and make it look good, had a family thing so had to start late, finish when I wake up

  const fetchWeather = useCallback(() => {
    const fetchWeather = async () => {
      try {
        dispatch({ type: WeatherActionType.FETCH_WEATHER, payload: city });
        const response = await axios.get(
          `http://localhost:4040/weather?city=${city}`
        );
        dispatch({
          type: WeatherActionType.FETCH_WEATHER_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: WeatherActionType.FETCH_WEATHER_ERROR,
          payload: error,
        });
      }
    };

    fetchWeather();
  }, [city, dispatch]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <div className={className}>
      {fetching && <Spinner />}
      {weather && (
        <div className="text-xs flex flex-col gap-2">
          <h1>
            {weather.name}, {weather.sys.country}
          </h1>
          <DescriptionLine
            label="Weather"
            value={weather.weather[0].description}
          />
          <DescriptionLine label="Temperature" value={weather.main.temp} />
          <DescriptionLine label="Wind" value={weather.wind.speed} />
          <DescriptionLine label="Humidity" value={weather.main.humidity} />
          <DescriptionLine label="Pressure" value={weather.main.pressure} />
          <DescriptionLine
            label="Sunrise"
            value={formatDate({
              date: weather.sys.sunrise,
              formatString: "HH:mm",
            })}
          />
          <DescriptionLine
            label="Sunset"
            value={formatDate({
              date: weather.sys.sunset,
              formatString: "HH:mm",
            })}
          />
        </div>
      )}
      {errorFetching && (
        <div className="text-red-500 text-blue-700 flex space-x-2 mt-4">
          <span className="text-xs">Error fetching weather</span>
          <ClickableText
            onClick={() => {
              fetchWeather();
            }}
            text="Try again"
          />
        </div>
      )}
    </div>
  );
}
