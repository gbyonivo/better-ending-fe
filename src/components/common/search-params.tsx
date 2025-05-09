"use client";

import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

interface SearchProps {
  searchKey: string;
  render: (search: string) => React.ReactNode;
  label: string;
  subLabel: string;
}

export function SearchParams({
  searchKey,
  render,
  label,
  subLabel,
}: SearchProps) {
  const [tempSearchValue, setTempSearchValue] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get(searchKey) || "");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="w-64">
      <Field>
        <Label className="text-sm/6 font-medium text-white">{label}</Label>
        <Description className="text-sm/6 text-white/50">
          {subLabel}
        </Description>
        <div className="flex space-x-2">
          <Input
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            onChange={(e) => setTempSearchValue(e.target.value)}
            value={tempSearchValue}
            onKeyUp={(e) => {
              if (tempSearchValue.trim().length === 0) return;
              if (e.key === "Enter") {
                setSearch(tempSearchValue);
                router.push(
                  pathname + "?" + createQueryString(searchKey, tempSearchValue)
                );
              }
            }}
          />
        </div>
      </Field>
      {render(search)}
    </div>
  );
}
