import { formatDate } from "@/utils/date";

interface WeatherNextDaysProps {
  dt: number;
  temp: number;
}

export const WeatherNextDays = ({ dt, temp }: WeatherNextDaysProps) => {
  return (
    <div className="text-center mb-0 flex items-center justify-center flex-col">
      <span className="block my-1">
        {formatDate({ date: dt * 1000, formatString: "EEE" })}
      </span>
      <span className="block my-1">{temp}&deg;</span>
    </div>
  );
};
