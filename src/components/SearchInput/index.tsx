"use client";

import xIcon from "../../assets/x-icon.png";
import lupaIcon from "../../assets/lupa-icon.png";
import Image from "next/image";
import styles from "./searchInput.module.css";
import { useSearch } from "@/hooks";

interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<SearchInputProps> = ({ ...props }) => {
  const { value, setValue } = useSearch();

  return (
    <div className={styles.inputContainer}>
      <Image src={lupaIcon} alt="Lupa icon" />

      <input
        {...props}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-test="search-input"
      />

      {value.length > 0 && (
        <button onClick={() => setValue("")}>
          <Image src={xIcon} alt="Remove text icon" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
