import { fetchAnimal } from "@/utils/fetchAnimal";
import { FC } from "react";
import styles from "./asyncList.module.css";

interface AsyncListProps {
  search: string | undefined;
}

const AsyncList: FC<AsyncListProps> = async ({ search }) => {
  const data = await fetchAnimal(search!);

  return (
    <>
      {data.length > 0 &&
        data.map((item) => (
          <article key={item.id} className={styles.item}>
            <a href="#">{item.url}</a>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}

      {data.length === 0 && search !== "" && (
        <>
          <p>
            No results found for <strong>{`'${search}'`}</strong>
          </p>
          <br />
        </>
      )}

      {data.length === 0 && (
        <p>
          Try looking for:{" "}
          <strong>
            insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit,
            cat, snake, dog, bird
          </strong>
          .
        </p>
      )}
    </>
  );
};

export default AsyncList;
