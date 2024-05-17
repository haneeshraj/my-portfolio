"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

import dirtyline from "@/fonts/dirtyline/font";
import styles from "./styles.module.scss";
import Element from "../element/Element";

const MainText = () => {
  return (
    <motion.div className={clsx(styles["main-text"], dirtyline.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1 }}
      >
        <Element.star
          height="36"
          width="36"
          className={clsx(styles["star"], styles["star--1"])}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.2 }}
      >
        <Element.star
          height="48"
          width="48"
          className={clsx(styles["star"], styles["star--2"])}
        />
      </motion.div>
      <motion.span
        className={styles.line}
        initial={{ y: 50, opacity: 0, filter: "blur(4rem)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0)" }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.92, 0, 0.25, 1] }}
      >
        tuRniNg
      </motion.span>
      <motion.span
        className={styles.line}
        initial={{ y: 50, opacity: 0, filter: "blur(4rem)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0)" }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.92, 0, 0.25, 1] }}
      >
        ViSiOn
      </motion.span>
      <motion.span
        className={styles.line}
        initial={{ y: 50, opacity: 0, filter: "blur(4rem)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0)" }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.92, 0, 0.25, 1] }}
      >
        tO ReaLitY
      </motion.span>
    </motion.div>
  );
};

export default MainText;
