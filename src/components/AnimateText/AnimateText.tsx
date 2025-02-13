"use client";

import clsx from "clsx";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

import styles from "./styles.module.scss";
import { slide } from "./anim";

const AnimatedText = ({
  className,
  style,
  text,
  type = "div",
  duration = 0.5,
  delay = 0,
  iDelay = 0.05,
  ease = [0.2, 0.02, 0, 0.99],
}: {
  className?: string;
  style?: React.CSSProperties;
  text: string;
  type: "div" | "p" | "h1" | "h2" | "h3";
  duration?: number;
  delay?: number;
  iDelay?: number;
  ease?: [number, number, number, number];
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
        <span
          key={index}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            key={index}
            className={styles.letter}
            variants={slide}
            custom={{ index, duration, delay, iDelay, ease }}
            initial="initial"
            animate={mainControls}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}
    </p>
  ) : type === "h1" ? (
    <h1
      className={clsx(styles.animatedText, className)}
      style={style}
      ref={ref}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            key={index}
            className={styles.letter}
            variants={slide}
            custom={{ index, duration, delay, iDelay, ease }}
            initial="initial"
            animate={mainControls}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}
    </h1>
  ) : type === "h2" ? (
    <h2
      className={clsx(styles.animatedText, className)}
      style={style}
      ref={ref}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            key={index}
            className={styles.letter}
            variants={slide}
            custom={{ index, duration, delay, iDelay, ease }}
            initial="initial"
            animate={mainControls}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}
    </h2>
  ) : type === "h3" ? (
    <h3
      className={clsx(styles.animatedText, className)}
      style={style}
      ref={ref}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            key={index}
            className={styles.letter}
            variants={slide}
            custom={{ index, duration, delay, iDelay, ease }}
            initial="initial"
            animate={mainControls}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}
    </h3>
  ) : (
    <div
      className={clsx(styles.animatedText, className)}
      style={style}
      ref={ref}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            key={index}
            className={styles.letter}
            variants={slide}
            custom={{ index, duration, delay, iDelay, ease }}
            initial="initial"
            animate={mainControls}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
