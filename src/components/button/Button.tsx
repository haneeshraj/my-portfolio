import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "next/link";

const Button = ({
  children,
  icon,
  className,
  href,
}: {
  children: string;
  icon?: React.ReactNode;
  className?: string;
  href: string;
}) => {
  return (
    <Link href={href} className={clsx(styles["button"], className)}>
      <div className={styles["icon"]}>{icon}</div>
      <span className={styles["text"]}>{children}</span>
    </Link>
  );
};

export default Button;
