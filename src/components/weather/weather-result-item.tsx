import { formatDate } from "@/utils/date";
import { Weather } from "@/types/weather";
import { WeatherDesciptionItem } from "./weather-description-line";
import { ClickableText } from "../common/clickable-text";
import { useRouter } from "next/navigation";

interface WeatherResultItemProps {
  weather: Weather;
}

export const WeatherResultItem = ({ weather }: WeatherResultItemProps) => {
  const router = useRouter();
  const descriptionLines = [
    { label: "Temp", description: weather.main.temp },
    { label: "Feels like", description: weather.main.feels_like },
    { label: "Temp min", description: weather.main.temp_min },
    { label: "Temp max", description: weather.main.temp_max },
  ];

  return (
    <div className="w-full">
      <div className="bg-blue-800 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm p-4 w-full">
        <div className="p-2 relative">
          <div className="flex mb-4 justify-between items-center">
            <div>
              <h5 className="mb-0 font-medium text-xl">
                {weather.name}, {weather.sys.country}
              </h5>
              <h6 className="mb-0">
                {formatDate({
                  date: weather.dt,
                  formatString: "MMMM dd",
                })}
              </h6>
            </div>
            <div className="text-right">
              <h3 className="font-bold text-4xl mb-0">
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
                // fetch 3 day forecast
              }}
              text="See 3 Day Forecast"
            />
          </span>
        </div>
      </div>
      <ClickableText
        onClick={() => {
          router.push(`/weather/${weather.name}`);
        }}
        className="mt-4 text-right"
        text="See Detailed Forecast"
      />
    </div>
  );
};
