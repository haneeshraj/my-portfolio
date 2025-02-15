"use client";

import { AnimatePresence, motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { view, btn } from "./anim";
import styles from "./styles.module.scss";
import AnimatedText from "../AnimateText/AnimateText";

export default function VideoPlayer({
  src,
  size = "large",
}: {
  src: string;
  size?: "small" | "large";
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);

  const videoDivRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const popUpVideoRef = useRef<HTMLVideoElement>(null);

  const videoInView = useInView(videoDivRef, { once: true });

  const mainControls = useAnimation();
  const btnControls = useAnimation();

  function handleMute() {
    if (popUpVideoRef.current) {
      popUpVideoRef.current.muted = !isMuted;
    }
    setIsMuted((prev) => !prev);
  }

  function handleVideoEnd() {
    setVideoEnded(true);
    setIsPlaying(false);
  }

  function handleSliderInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newTime = parseFloat(e.target.value);
    if (popUpVideoRef.current) {
      popUpVideoRef.current.currentTime = newTime;
      setCurrentTime(newTime); // Keep the slider in sync
    }
  }

  function handlePlayback() {
    if (isPlaying) {
      popUpVideoRef.current?.pause();
    } else {
      popUpVideoRef.current?.play();
    }
    setIsPlaying((prev) => !prev);
  }

  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  useEffect(() => {
    const video = popUpVideoRef.current;
    if (video) {
      video.onloadedmetadata = () => {
        setVideoDuration(video.duration);
      };
      video.ontimeupdate = () => {
        setCurrentTime(video.currentTime);
      };
    }

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
        onClick={() => {
          setIsClicked(!isClicked);
          setIsPlaying(true);
          setVideoEnded(false);
          setIsMuted(false);
        }}
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
              onClick={() => {
                setIsClicked(false);
                // slowly decrease volume to 0 in 0.5s
                const interval = setInterval(() => {
                  if (popUpVideoRef.current?.volume) {
                    popUpVideoRef.current.volume -= 0.1;
                  } else {
                    clearInterval(interval);
                  }
                }, 50);
              }}
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
                className={clsx(styles["popup-video__video"], {
                  [styles["popup-video__video--paused"]]:
                    !isPlaying && !videoEnded,
                })}
                autoPlay
                onEnded={handleVideoEnd}
                onClick={videoEnded ? () => {} : handlePlayback}
              >
                <source src={src} type="video/mp4" />
              </video>
              <AnimatePresence>
                {!isPlaying && !videoEnded && (
                  <AnimatedText
                    text="PAUSED"
                    type="p"
                    className={styles["pause-text"]}
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {videoEnded && (
                  <motion.div
                    className={clsx(styles["controls__replay"])}
                    initial={{ opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: "-50%",
                      y: "-50%",
                    }}
                    exit={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                    onClick={() => {
                      if (popUpVideoRef.current) {
                        popUpVideoRef.current.currentTime = 0;
                        popUpVideoRef.current.play();
                      }
                      setVideoEnded(false);
                      setIsPlaying(true);
                    }}
                  >
                    <button>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 15L10 19L14 23"
                          stroke="#33363F"
                          strokeWidth="2"
                        />
                        <path
                          d="M5.93782 15.5C5.16735 14.1655 4.85875 12.6141 5.05989 11.0863C5.26102 9.55856 5.96064 8.13986 7.05025 7.05025C8.13986 5.96064 9.55856 5.26102 11.0863 5.05989C12.6141 4.85875 14.1655 5.16735 15.5 5.93782C16.8345 6.70829 17.8775 7.89757 18.4672 9.32122C19.0568 10.7449 19.1603 12.3233 18.7615 13.8117C18.3627 15.3002 17.4838 16.6154 16.2613 17.5535C15.0388 18.4915 13.5409 19 12 19"
                          stroke="#33363F"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div className={styles["controls"]}>
                <motion.button
                  className={clsx(
                    styles["controls__playback"],
                    styles["controls__icon"]
                  )}
                  onClick={handlePlayback}
                  data-label={isPlaying ? "Pause" : "Play"}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: [0.3, 0, 0, 1], delay: 0.6 }}
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
                </motion.button>
                <input
                  type="range"
                  className={styles["controls__video-progress"]}
                  min="0"
                  max={videoDuration}
                  step="0.01"
                  value={currentTime}
                  onInput={handleSliderInput}
                />
                <AnimatedText
                  text={`${formatTime(currentTime)} / ${formatTime(
                    videoDuration
                  )}`}
                  type="div"
                  className={styles["controls__time"]}
                  delay={0.6}
                />

                {/* Display current time / video duration */}
                <motion.button
                  className={clsx(
                    styles["controls__mute"],
                    styles["controls__icon"]
                  )}
                  onClick={handleMute}
                  data-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.15838 13.9306C3.44537 12.7423 3.44537 11.2577 4.15838 10.0694C4.37596 9.70674 4.73641 9.45272 5.1511 9.36978L6.84413 9.03117C6.94499 9.011 7.03591 8.95691 7.10176 8.87788L9.17085 6.39498C10.3534 4.97592 10.9447 4.26638 11.4723 4.45742C12 4.64846 12 5.57207 12 7.41928L12 16.5807C12 18.4279 12 19.3515 11.4723 19.5426C10.9447 19.7336 10.3534 19.0241 9.17085 17.605L7.10176 15.1221C7.03591 15.0431 6.94499 14.989 6.84413 14.9688L5.1511 14.6302C4.73641 14.5473 4.37596 14.2933 4.15838 13.9306Z"
                        fill="#222222"
                      />
                      <path
                        d="M15 15L21 9"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M21 15L15 9"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeLinecap="round"
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
                        d="M4.15838 13.9306C3.44537 12.7423 3.44537 11.2577 4.15838 10.0694C4.37596 9.70674 4.73641 9.45272 5.1511 9.36978L6.84413 9.03117C6.94499 9.011 7.03591 8.95691 7.10176 8.87788L9.17085 6.39498C10.3534 4.97592 10.9447 4.26638 11.4723 4.45742C12 4.64846 12 5.57207 12 7.41928L12 16.5807C12 18.4279 12 19.3515 11.4723 19.5426C10.9447 19.7336 10.3534 19.0241 9.17085 17.605L7.10176 15.1221C7.03591 15.0431 6.94499 14.989 6.84413 14.9688L5.1511 14.6302C4.73641 14.5473 4.37596 14.2933 4.15838 13.9306Z"
                        fill="#222222"
                      />
                      <path
                        d="M14.5355 8.46447C15.4684 9.39732 15.9948 10.6611 16 11.9803C16.0052 13.2996 15.4888 14.5674 14.5633 15.5076"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18.6569 6.34314C20.1494 7.83572 20.9916 9.85769 20.9999 11.9685C21.0083 14.0793 20.182 16.1078 18.7012 17.6121"
                        stroke="#222222"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
