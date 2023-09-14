"use client";

import styles from "./searchButton.module.css";
import { useSearch } from "@/hooks";
import Link from "next/link";

interface SearchButtonProps {}

const SearchButton: React.FC<SearchButtonProps> = () => {
  const { value } = useSearch();

  return (
    <Link
      href={{
        pathname: "/results",
        query: { search: value },
      }}
      className={value.length > 0 ? styles.btnSearch : styles.btnSearchDisabled}
      data-test="search-button"
    >
      Buscar
    </Link>
  );
};

export default SearchButton;
