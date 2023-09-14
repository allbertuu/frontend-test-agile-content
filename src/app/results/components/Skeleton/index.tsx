import styles from "./skeleton.module.css";

interface SkeletonProps {}

const Skeleton: React.FC<SkeletonProps> = () => {
  return (
    <div className={styles.container}>
      {[...new Array(10)].map((_, index) => (
        <div key={index} className={styles.item}>
          <a></a>
          <h2></h2>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
