"use client";

import clsx from "clsx";
import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import styles from "./styles.module.scss";
import { slide } from "./anim";

const AnimatedText = ({
  className,
  style,
  text,
  type = "div",
}: {
  className?: string;
  style?: React.CSSProperties;
  text: string;
  type: "div" | "p" | "h1" | "h2" | "h3";
}) => {
  const ref = useRef<
    null | HTMLDivElement | HTMLParagraphElement | HTMLHeadingElement
  >(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const letters = text.split("");

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  return type === "p" ? (
    <p className={clsx(styles.animatedText, className)} style={style} ref={ref}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={styles.letter}
          variants={slide}
          custom={index}
          initial="initial"
          animate={mainControls}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </p>
  ) : type === "h1" ? (
    <h1
      className={clsx(styles.animatedText, className)}
      style={style}
      ref={ref}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={styles.letter}
          variants={slide}
          custom={index}
          initial="initial"
          animate={mainControls}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  ) : type === "h2" ? (
    <h2
      className={clsx(styles.animatedText, className)}
      style={style}
      ref={ref}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={styles.letter}
          variants={slide}
          custom={index}
          initial="initial"
          animate={mainControls}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h2>
  ) : type === "h3" ? (
    <h3
      className={clsx(styles.animatedText, className)}
      style={style}
      ref={ref}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={styles.letter}
          variants={slide}
          custom={index}
          initial="initial"
          animate={mainControls}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h3>
  ) : (
    <div
      className={clsx(styles.animatedText, className)}
      style={style}
      ref={ref}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={styles.letter}
          variants={slide}
          custom={index}
          initial="initial"
          animate={mainControls}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
