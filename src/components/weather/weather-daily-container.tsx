import { setDailyWeather } from "@/lib/slices/weather";
import { useEffect, useMemo } from "react";
import { Coordinates, DailyWeatherResponse } from "@/types/weather";
import axios from "axios";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../common/spinner";
import { RootState } from "@/lib/store";
import { createDailyWeatherKey } from "@/utils/weather";

interface WeatherDailyContainerProps {
  coordinates: Coordinates;
  className?: string;
  render: (dailyWeather: DailyWeatherResponse) => React.ReactNode;
}

export function WeatherDailyContainer({
  coordinates,
  className,
  render,
}: WeatherDailyContainerProps) {
  const [fetching, setFetching] = useState(false);
  const [fetchingError, setFetchingError] = useState<unknown>(null);
  const dispatch = useDispatch();
  const { dailyWeatherRecord } = useSelector(
    (state: RootState) => state.weather
  );
  const dailyWeatherKey = createDailyWeatherKey(
    coordinates.lat,
    coordinates.lon
  );

  const dailyWeather = useMemo(
    () => dailyWeatherRecord[dailyWeatherKey] || [],
    [dailyWeatherKey, dailyWeatherRecord]
  );

  const fetchDailyWeather = useCallback(() => {
    if (!coordinates.lat || !coordinates.lon || dailyWeather.daily) return;
    const fetchDaily = async () => {
      try {
        setFetching(true);
        const response = await axios.get(
          `http://localhost:4040/weather/daily?lat=${coordinates.lat}&lon=${coordinates.lon}`
        );
        dispatch(setDailyWeather(response.data));
        setFetching(false);
      } catch (error) {
        setFetchingError(error);
      }
    };

    fetchDaily();
  }, [coordinates, dispatch, dailyWeather]);

  useEffect(() => {
    fetchDailyWeather();
  }, [fetchDailyWeather]);

  if (!coordinates.lat || !coordinates.lon) return null;
  return (
    <div className={className}>
      {fetching && <Spinner />}
      {!!fetchingError && <div>Error fetching daily weather</div>}
      {render(dailyWeather)}
    </div>
  );
}
