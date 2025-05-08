import { weatherReducer } from "@/reducers/weather";
import { Weather } from "@/types/weather";
import { WeatherActionType } from "@/types/weather-action-type";
import React, { Dispatch, useReducer } from "react";

interface WeatherContextType {
  weather: Weather | null;
  fetching: boolean;
  errorFetching?: string | null;
  dispatch: Dispatch<{ type: WeatherActionType; payload: unknown }>;
}

export const WeatherContext = React.createContext<WeatherContextType>(
  {} as WeatherContextType
);

function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(weatherReducer, {
    weather: null,
    fetching: false,
    cache: {},
  });

  return (
    <WeatherContext.Provider
      value={{
        dispatch,
        weather: state.weather,
        fetching: state.fetching,
        errorFetching: state.errorFetching,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext(): WeatherContextType {
  return React.useContext<WeatherContextType>(WeatherContext);
}

export default WeatherProvider;
