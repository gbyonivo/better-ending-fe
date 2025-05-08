import { Weather } from "../types/weather";
import { WeatherActionType } from "../types/weather-action-type";
import { WeatherState } from "../types/states/weather-state";

export function weatherReducer(
  state: WeatherState,
  action: { type: WeatherActionType; payload: unknown }
): WeatherState {
  return (
    {
      [WeatherActionType.FETCH_WEATHER]: (state: WeatherState) => {
        return {
          ...state,
          fetching: true,
          errorFetching: null,
        };
      },
      [WeatherActionType.FETCH_WEATHER_ERROR]: (
        state: WeatherState,
        payload: string
      ) => {
        return {
          ...state,
          fetching: false,
          errorFetching: payload,
        };
      },
      [WeatherActionType.FETCH_WEATHER_SUCCESS]: (
        state: WeatherState,
        payload: Weather
      ) => {
        return {
          ...state,
          weather: payload,
          cache: {
            ...state.cache,
            [payload.name.toLowerCase()]: payload,
          },
        };
      },
      // @ts-expect-error - This is a valid action type
    }[action.type]?.(state, action.payload) ?? state
  );
}
