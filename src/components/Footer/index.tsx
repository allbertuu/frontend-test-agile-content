import styles from "./footer.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.container}>
      <div>&copy; Google 2021</div>
      <div>version: 0.1.0</div>
    </footer>
  );
};

export default Footer;
