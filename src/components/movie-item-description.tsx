export const MovieItemDescription = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-sm">{value}</div>
    </div>
  );
};
