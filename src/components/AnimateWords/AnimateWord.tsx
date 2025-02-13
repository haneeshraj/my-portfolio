"use client";

import clsx from "clsx";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

import styles from "./styles.module.scss";
import { slide } from "./anim";

export default function AnimateWord({
  className,
  style,
  text,
  type = "div",
  duration = 1.2,
  delay = 0,
  iDelay = 0.1,
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
}) {
  const ref = useRef<
    null | HTMLDivElement | HTMLParagraphElement | HTMLHeadingElement
  >(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const words = text.split(" ");

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }

    console.log(words);
  }, [isInView, mainControls, words]);

  return type === "p" ? (
    <p className={clsx(styles.animatedText, className)} style={style} ref={ref}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            className={styles.word}
            variants={slide}
            custom={{ index, duration, delay, iDelay, ease }}
            initial="initial"
            animate={mainControls}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
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
      {words.map((word, index) => (
        <span
          key={index}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            key={index}
            className={styles.word}
            variants={slide}
            custom={{ index, duration, delay, iDelay, ease }}
            initial="initial"
            animate={mainControls}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
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
      {words.map((word, index) => (
        <span
          key={index}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            key={index}
            className={styles.word}
            variants={slide}
            custom={{ index, duration, delay, iDelay, ease }}
            initial="initial"
            animate={mainControls}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
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
      {words.map((word, index) => (
        <span
          key={index}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            key={index}
            className={styles.word}
            variants={slide}
            custom={{ index, duration, delay, iDelay, ease }}
            initial="initial"
            animate={mainControls}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
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
      {words.map((word, index) => (
        <span
          key={index}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            key={index}
            className={styles.word}
            variants={slide}
            custom={{ index, duration, delay, iDelay, ease }}
            initial="initial"
            animate={mainControls}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
