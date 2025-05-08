import { Ending } from "@/types/ending";
import { useMemo, useState } from "react";
import { TypeAnimation } from "react-type-animation";

interface Props {
  endings: Ending[];
}

export const MovieEndingsSwitch = ({ endings }: Props) => {
  const [selectedAiName, setSelectedAiName] = useState<string | null>(
    () => endings[0]?.aiName
  );

  const headers = useMemo(
    () => endings.map((ending) => ending.aiName),
    [endings]
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 text-xs justify-end">
        {headers.map((header) => {
          const isSelected = selectedAiName === header;
          return (
            <div
              key={header}
              className={`${
                isSelected
                  ? "text-blue-400 border border-blue-400 rounded-lg"
                  : ""
              } cursor-pointer p-2`}
              onClick={() => setSelectedAiName(header)}
            >
              {header}
            </div>
          );
        })}
      </div>
      {endings.map((ending) => {
        return (
          <div
            key={ending.aiName}
            className={`${
              selectedAiName === ending.aiName ? "block" : "hidden"
            }`}
          >
            <TypeAnimation
              sequence={[ending.ending, 10]}
              wrapper="span"
              speed={10}
            />
          </div>
        );
      })}
    </div>
  );
};
