interface ClickableTextProps {
  text: string;
  onClick: () => void;
}

export const ClickableText = ({ text, onClick }: ClickableTextProps) => {
  return (
    <div
      className="text-xs text-gray-300 cursor-pointer hover:text-gray-400 underline"
      role="button"
      onClick={onClick}
    >
      {text}
    </div>
  );
};
