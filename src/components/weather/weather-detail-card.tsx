import { formatDate } from "@/utils/date";
import React from "react";

interface WeatherCardProps {
  temperature: number;
  condition: string;
  dt: number;
  humidity: number;
  windSpeed: number;
  icon?: string;
}

export function WeatherDetailCard({
  temperature,
  condition,
  dt,
  humidity,
  windSpeed,
  icon,
}: WeatherCardProps) {
  return (
    <div className="bg-blue-800 rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {formatDate({ date: dt * 1000, formatString: "MMM dd" })}
          </h2>
          <p className="text-white">{condition}</p>
        </div>
        {icon && (
          <div className="w-16 h-16">
            <img
              src={icon}
              alt={condition}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          <span className="text-5xl font-bold text-white">{temperature}°</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between">
          <div className="text-center">
            <p className="text-sm text-white">Humidity</p>
            <p className="text-lg font-semibold text-white">{humidity}%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-white">Wind</p>
            <p className="text-lg font-semibold text-white">{windSpeed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
