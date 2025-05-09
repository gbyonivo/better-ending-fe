interface DescriptionLineProps {
  label?: string;
  value: string | number;
  row?: boolean;
}

export const DescriptionLine = ({
  label,
  value,
  row = false,
}: DescriptionLineProps) => {
  if (!value) return null;
  const className = row ? "flex flex-row space-x-2" : "flex flex-col";
  return (
    <div className={className}>
      {!!label && <div className="text-xs text-gray-500">{label}</div>}
      <div className="text-xs">{value}</div>
    </div>
  );
};
