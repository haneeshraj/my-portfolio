"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./styles.module.scss";
import { navItems } from "@/config/nav-items";
import Logo from "../logo/Logo";
import { navItemsAnim } from "./anim";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
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
          <div
            className={clsx(styles["hamburger"], { [styles["open"]]: !open })}
            onClick={() => setOpen(!open)}
          >
            <motion.div
              className={clsx(styles.line, { [styles["line--1"]]: open })}
              initial={{ width: 0 }}
              animate={{
                width: "60%",
                transition: { duration: 0.2, ease: [0.36, 0.03, 0, 0.99] },
              }}
            ></motion.div>
            <motion.div
              className={clsx(styles.line, { [styles["line--2"]]: open })}
              initial={{ width: 0 }}
              animate={{
                width: "60%",
                transition: {
                  duration: 0.2,
                  ease: [0.36, 0.03, 0, 0.99],
                  delay: 0.2,
                },
              }}
            ></motion.div>
          </div>

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
            transition={{
              duration: 1.2,
              ease: [0.36, 0.02, 0, 0.99],
              delay: 1,
            }}
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
      <div className={styles["nav-mobile"]}>
        <AnimatePresence>
          {open && (
            <motion.div
              className={styles["nav-mobile__bg"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
          )}
        </AnimatePresence>
        <motion.div className={styles["nav-mobile__list"]}>
          <AnimatePresence>
            {open &&
              navItems.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className={clsx(
                    styles["nav-mobile__item"],
                    pathname === item.path && styles["nav-mobile__item--active"]
                  )}
                  onClick={() => setOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2 * index,
                        ease: [0.65, 0.05, 0, 1],
                        duration: 1,
                      },
                    }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.2 } }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
