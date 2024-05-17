"use client";

import { motion } from "framer-motion";

import MainText from "@/components/mainText/MainText";
import VideoIntro from "../videoIntro/VideoIntro";
import styles from "./styles.module.scss";
import Element from "@/components/element/Element";

const HomeIntro = () => {
  return (
    <div className={styles.intro}>
      <VideoIntro />
      <div className={styles.content}>
        <MainText />
        <motion.p
          className={styles["intro-text"]}
          initial={{ filter: "blur(3rem)", opacity: 0 }}
          animate={{
            filter: "blur(0)",
            opacity: 1,
            transition: { duration: 1, delay: 1.4 },
          }}
        >
          I&apos;m <strong>Haneesh Raj</strong>, also known as
          <strong> mist </strong>
          online. I am a data science student, full-stack web developer, motion
          graphics designer, VFX artist and music producer. Want to know more
          about me? Scroll ahead!
        </motion.p>
        <Element.arrow className={styles["arrow"]} height="12" width="27" />
      </div>
    </div>
  );
};

export default HomeIntro;
