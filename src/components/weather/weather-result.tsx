"use client";

import { useContext, useEffect } from "react";
import { WeatherContext } from "@/context/weather";
import { WeatherActionType } from "@/types/weather-action-type";
import axios from "axios";

interface Props {
  city: string;
}

export function WeatherResult({ city }: Props) {
  const { dispatch, weather, fetching, errorFetching } =
    useContext(WeatherContext);

  console.log(weather, fetching, errorFetching);

  // TODO:add designs and make it look good, had a family thing so had to start late, finish when I wake up

  useEffect(() => {
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

  return (
    <div>
      <h1>Weather</h1>
    </div>
  );
}
