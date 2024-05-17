import clsx from "clsx";
import styles from "./styles.module.scss";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default Container;
