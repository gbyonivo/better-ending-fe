interface WeatherDescriptionLineProps {
  label: string;
  description: string | number;
}

export const WeatherDesciptionItem = ({
  description,
  label,
}: WeatherDescriptionLineProps) => {
  return (
    <div className="w-full sm:w-1/2 text-xs">
      <div className="flex mb-2 items-center">
        <span>{label}</span>
        <small className="px-2 inline-block">{description}</small>
      </div>
    </div>
  );
};
