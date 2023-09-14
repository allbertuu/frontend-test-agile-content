"use client";

import Image from "next/image";
import styles from "./headerLeftContent.module.css";
import { usePathname } from "next/navigation";
import googleLogo from "../../assets/googlelogo_color.png";
import Link from "next/link";
import { SearchInput, SearchButton } from "..";

interface HeaderLeftContentProps {}

const HeaderLeftContent: React.FC<HeaderLeftContentProps> = () => {
  const pathname = usePathname();

  if (pathname === "/results")
    return (
      <div className={styles.searchHeader}>
        <Link href="/">
          <Image
            src={googleLogo}
            width={100}
            alt="Google logo with color"
            className={styles.googleImg}
          />
        </Link>

        <SearchInput />
        <SearchButton />
      </div>
    );

  return (
    <h1 className={styles.title}>
      <strong>Agile Content</strong> Frontend Test
    </h1>
  );
};

export default HeaderLeftContent;
