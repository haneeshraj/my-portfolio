"use client";

import { motion } from "framer-motion";

import styles from "./styles.module.scss";

const VideoIntro = () => {
  return (
    <div className={styles["video-section"]}>
      <motion.video
        className={styles["video"]}
        autoPlay
        muted
        loop
        initial={{ filter: "blur(3rem)", opacity: 0 }}
        animate={{ filter: "blur(0)", opacity: 1, transition: { duration: 2 } }}
      >
        <source src="/intro.mp4" type="video/mp4" />
      </motion.video>
    </div>
  );
};

export default VideoIntro;
