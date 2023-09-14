import Image from "next/image";
import googleAppsIcon from "../../assets/google-apps.png";
import googleAccountImg from "../../assets/account-img.jpg";
import styles from "./header.module.css";
import { HeaderLeftContent } from "..";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.container}>
      <HeaderLeftContent />

      <div className={styles.googleInfos}>
        <Image src={googleAppsIcon} alt="Google apps icon" />
        <Image
          src={googleAccountImg}
          alt="Google Account Image"
          className={styles.googleAccountImage}
        />
      </div>
    </header>
  );
};

export default Header;
