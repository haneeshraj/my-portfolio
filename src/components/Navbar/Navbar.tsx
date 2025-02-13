"use client";

import Link from "next/link";
import { motion } from "motion/react";

import styles from "./styles.module.scss";
import navItems, { NavItem } from "../../utils/navitems";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles["nav__logo"]}>Logo</div>
      <ul className={styles["nav__items"]}>
        {navItems.map((item: NavItem, index: number) => {
          return (
            <Link
              href={item.path}
              key={item.name}
              style={{ textDecoration: "none", overflow: "hidden" }}
            >
              <motion.li
                className={styles["nav__item"]}
                initial={{ y: "80%" }}
                animate={{
                  y: 0,
                  transition: {
                    delay: index * 0.2,
                    ease: [0.25, 0, 0, 0.98],
                    duration: 0.9,
                  },
                }}
              >
                {item.name}
              </motion.li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
