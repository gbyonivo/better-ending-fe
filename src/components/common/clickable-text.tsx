import clsx from "clsx";

interface ClickableTextProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export const ClickableText = ({
  text,
  onClick,
  className,
}: ClickableTextProps) => {
  return (
    <div
      className={clsx(
        "text-xs text-gray-300 cursor-pointer hover:text-gray-400",
        className
      )}
    >
      <span className="inline-block underline" role="button" onClick={onClick}>
        {text}
      </span>
    </div>
  );
};
