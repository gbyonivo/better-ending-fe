import { Weather } from "../weather";

export interface WeatherState {
  weather: Weather | null;
  fetching: boolean;
  errorFetching?: string | null;
  cache: Record<string, Weather>;
}
