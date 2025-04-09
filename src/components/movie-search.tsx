"use client";

import { Button, Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

import { GET_MOVIE } from "@/utils/grapqhl/movies";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Movie } from "@/types/movie";
import { MovieItem } from "./movie-item";
export function MovieSearch() {
  const [search, setSearch] = useState("Jaws");
  const [tempSearchValue, setTempSearchValue] = useState("");

  const { data, loading, error } = useQuery<{ movieByName: Movie }>(GET_MOVIE, {
    variables: { name: search },
    skip: !search,
  });

  return (
    <div className="w-96">
      <Field>
        <Label className="text-sm/6 font-medium text-white">Movie Name</Label>
        <Description className="text-sm/6 text-white/50">
          Enter Name of Movie
        </Description>
        <div className="flex space-x-2">
          <Input
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            onChange={(e) => setTempSearchValue(e.target.value)}
            value={tempSearchValue}
            disabled={loading}
          />
          <Button
            onClick={() => setSearch(tempSearchValue)}
            disabled={loading || tempSearchValue.trim().length === 0}
            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white h-8 mt-3.5"
          >
            Search
          </Button>
        </div>
      </Field>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <MovieItem movie={data.movieByName} className="mt-8" />}
    </div>
  );
}
