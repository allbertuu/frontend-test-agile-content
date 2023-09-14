"use client";

import { createContext, useState } from "react";
import { ISearchContext, ISearchProvider } from "./types";

export const SearchContext = createContext({} as ISearchContext);

export function SearchProvider({ children }: ISearchProvider) {
  const [value, setValue] = useState("");

  return (
    <SearchContext.Provider value={{ value, setValue }}>
      {children}
    </SearchContext.Provider>
  );
}
