import Image from "next/image";
import styles from "./page.module.css";
import googleLogo from "../assets/googlelogo_color.png";
import { SearchButton, SearchInput } from "@/components";

export default function Home() {
  return (
    <main className={styles.container}>
      <Image src={googleLogo} alt="Google logo with color" />
      <SearchInput />
      <SearchButton />
    </main>
  );
}
