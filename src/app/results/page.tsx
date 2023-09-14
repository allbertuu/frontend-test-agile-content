import { AsyncList, Skeleton } from "./components";
import { Suspense } from "react";
import styles from "./page.module.css";

export default function Results({
  searchParams,
}: {
  searchParams: { search: string | undefined };
}) {
  return (
    <main className={styles.container}>
      <Suspense fallback={<Skeleton />}>
        <AsyncList search={searchParams.search} />
      </Suspense>
    </main>
  );
}
