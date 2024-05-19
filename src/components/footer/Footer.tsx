import Link from "next/link";
import styles from "./styles.module.scss";
import SocialIcon from "../socialIcon/SocialIcon";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <p className={styles["copyright"]}>
        Copyright &copy; {new Date().getFullYear()} Haneesh Raj B LLC. All
        rights reserved.
      </p>
      <div className={styles["socials"]}>
        <Link href="https://www.linkedin.com/in/haneeshraj/">
          <SocialIcon.linkedin
            className={styles["social-icon"]}
            height="18"
            width="18"
          />
        </Link>

        <Link href="https://github.com/haneeshraj">
          <SocialIcon.github
            className={styles["social-icon"]}
            height="18"
            width="18"
          />
        </Link>

        <Link href="https://www.instagram.com/haneeshrajb/">
          <SocialIcon.instagram
            className={styles["social-icon"]}
            height="18"
            width="18"
          />
        </Link>

        <Link href="https://www.youtube.com/@mistlovesstars">
          <SocialIcon.youtube
            className={styles["social-icon"]}
            height="18"
            width="18"
          />
        </Link>

        <Link href=""></Link>
      </div>
    </div>
  );
};

export default Footer;
