"use client";

import { useCallback, useContext, useEffect } from "react";
import { WeatherContext } from "@/context/weather";
import { WeatherActionType } from "@/types/weather-action-type";
import axios from "axios";
import { Spinner } from "../common/spinner";
import { ClickableText } from "../common/clickable-text";
import { WeatherResultItem } from "./weather-result-item";

interface Props {
  city: string;
  className?: string;
}

export function WeatherResult({ city, className }: Props) {
  const { dispatch, weather, fetching, errorFetching } =
    useContext(WeatherContext);

  const fetchWeather = useCallback(() => {
    const fetchWeather = async () => {
      if (city.length < 2) return;
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
      {weather && <WeatherResultItem weather={weather} />}
      {errorFetching && (
        <div className="text-red-500 text-blue-700 flex space-x-2 mt-4">
          <span className="text-xs">Error fetching weather</span>
          <ClickableText onClick={fetchWeather} text="Try again" />
        </div>
      )}
    </div>
  );
}
