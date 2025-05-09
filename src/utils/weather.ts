import { formatDate } from "./date";

export const createDailyWeatherKey = (
  lat: number | null,
  lon: number | null
) => {
  if (!lat || !lon) return "0";
  return `${lat}-${lon}-${formatDate({
    date: new Date(),
    formatString: "yyyy-MM-dd",
  })}`;
};
