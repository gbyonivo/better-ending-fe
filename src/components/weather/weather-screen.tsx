"use client";

import { useParams } from "next/navigation";

export const WeatherScreen = () => {
  const params = useParams();
  const city = params.city as string;

  return <div>{city}</div>;
};
