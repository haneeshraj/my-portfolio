"use client";

import { useEffect } from "react";
import styles from "./styles.module.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };

  const cursorSize = 20;

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 1000, damping: 100 }),
    y: useSpring(mouse.y, { stiffness: 1000, damping: 100 }),
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  return (
    <motion.div
      className={styles.cursor}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
    ></motion.div>
  );
};

export default Cursor;
