"use client";

import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const useSearch = () => useContext(SearchContext);

export default useSearch;
