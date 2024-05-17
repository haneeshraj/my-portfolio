"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import { navItems } from "@/config/nav-items";
import Logo from "../logo/Logo";
import { navItemsAnim } from "./anim";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <motion.ul
      className={styles["navbar"]}
      initial={{ backdropFilter: "blur(0)" }}
      animate={{ backdropFilter: "blur(1rem)" }}
      transition={{ duration: 3 }}
    >
      <Link href="/" className={styles["logo"]}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.36, 0.02, 0, 0.99] }}
        >
          <Logo.branding />
        </motion.div>
      </Link>
      <li className={styles["nav-menu"]}>
        <ul className={styles["nav-items"]}>
          {navItems.map((item, index) => (
            <Link href={item.path} className={styles["link"]} key={index}>
              <motion.li
                variants={navItemsAnim}
                initial="initial"
                animate="animate"
                custom={index}
                className={clsx(
                  styles["nav-item"],
                  pathname === item.path && styles["nav-item--active"]
                )}
              >
                {item.name}
              </motion.li>
            </Link>
          ))}
        </ul>
      </li>
      <li className={styles["names"]}>
        <motion.span
          className={styles["name"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          haneesh raj
        </motion.span>
        <motion.span
          className={styles["circle-seperator"]}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.36, 0.02, 0, 0.99], delay: 1 }}
        ></motion.span>
        <motion.span
          className={styles["name"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          mist
        </motion.span>
      </li>
    </motion.ul>
  );
};

export default Navbar;
