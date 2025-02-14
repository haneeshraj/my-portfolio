"use client";

import { AnimatePresence, motion, useAnimation, useInView } from "motion/react";
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
  const [isPlaying, setIsPlaying] = useState(true);

  const videoDivRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const popUpVideoRef = useRef<HTMLVideoElement>(null);

  const videoInView = useInView(videoDivRef, { once: true });

  const mainControls = useAnimation();
  const btnControls = useAnimation();

  function handlePlayback() {
    if (isPlaying) {
      popUpVideoRef.current?.pause();
    } else {
      popUpVideoRef.current?.play();
    }
    setIsPlaying((prev) => !prev);
  }

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
        ref={videoDivRef}
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
      <AnimatePresence>
        {isClicked && (
          <>
            <motion.div
              className={styles["popup-overlay"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1, delay: 0.4 } }}
              onClick={() => setIsClicked(false)}
            />
            <motion.div
              className={styles["popup-video"]}
              initial={{
                opacity: 0,
                scale: 1.05,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: "-50%",
                y: "-50%",
                transition: {
                  duration: 1,
                  delay: 0.2,
                  ease: [0.8, 0, 0, 0.99],
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: "-50%",
                y: "-50%",
                transition: { duration: 0.7, ease: [0.8, 0, 0, 0.99] },
              }}
            >
              <video
                ref={popUpVideoRef}
                className={styles["popup-video__video"]}
                autoPlay
              >
                <source src={src} type="video/mp4" />
              </video>
              <div className={styles["controls"]}>
                <button
                  className={styles["controls__playback"]}
                  onClick={handlePlayback}
                >
                  {isPlaying ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="6"
                        y="5"
                        width="4"
                        height="14"
                        rx="1"
                        fill="#222222"
                      />
                      <rect
                        x="14"
                        y="5"
                        width="4"
                        height="14"
                        rx="1"
                        fill="#222222"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.1175 10.244L9.59919 6.23602C8.40503 5.50176 7 6.56963 7 8.2115V15.7885C7 17.4304 8.40503 18.4982 9.59919 17.764L16.1175 13.756C17.2942 13.0325 17.2942 10.9675 16.1175 10.244Z"
                        fill="#222222"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
