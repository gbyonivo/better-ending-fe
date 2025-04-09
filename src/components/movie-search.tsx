"use client";

import { GET_MOVIE } from "@/utils/grapqhl/movies";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export function MovieSearch() {
  const [search, setSearch] = useState("Jaws");
  const [tempSearchValue, setTempSearchValue] = useState("");

  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: { name: search },
  });

  return (
    <div>
      <input
        type="text"
        value={tempSearchValue}
        onChange={(e) => setTempSearchValue(e.target.value)}
      />
      <button onClick={() => setSearch(tempSearchValue)}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>{data.movieByName.Title}</div>}
    </div>
  );
}
