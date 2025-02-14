"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { view, btn } from "./anim";
import styles from "./styles.module.scss";

export default function VideoPlayer({
  src,
  size = "large",
}: {
  src: string;
  size?: "small" | "large";
}) {
  const [isClicked, setIsClicked] = useState(false);

  const videoRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const videoInView = useInView(videoRef, { once: true });

  const mainControls = useAnimation();
  const btnControls = useAnimation();

  useEffect(() => {
    if (videoInView) {
      mainControls.start("animate");
      btnControls.start("animate");
    }
  }, [videoInView, mainControls, btnControls, isClicked]);

  return (
    <>
      <motion.div
        className={styles["container"]}
        ref={videoRef}
        variants={view}
        initial="initial"
        animate={mainControls}
        onClick={() => setIsClicked(!isClicked)}
      >
        <motion.video className={styles["video"]} muted autoPlay loop>
          <source src={src} type="video/mp4" />
        </motion.video>
        <motion.div
          className={clsx(styles["play-btn"], {
            [styles["play-btn--small"]]: size === "small",
            [styles["play-btn--large"]]: size === "large",
          })}
          ref={btnRef}
          variants={btn}
          initial="initial"
          animate={btnControls}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
}
