export const MovieItemDescription = ({
  label,
  value,
  row = false,
}: {
  label?: string;
  value: string;
  row?: boolean;
}) => {
  if (!value) return null;
  const className = row ? "flex flex-row space-x-2" : "flex flex-col";
  return (
    <div className={className}>
      {!!label && <div className="text-xs text-gray-500">{label}</div>}
      <div className="text-xs">{value}</div>
    </div>
  );
};
