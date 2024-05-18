import clsx from "clsx";
import Image from "next/image";

import dirtyline from "@/fonts/dirtyline/font";
import styles from "./styles.module.scss";
import image1 from "../../../../public/me1.png";
import image2 from "../../../../public/me2.jpg";
import vars from "@/config/variables.module.scss";
import Button from "@/components/button/Button";
import Element from "@/components/element/Element";
import Reveal from "@/components/reveal/Reveal";

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.square}></div>
      <div className={styles["left"]}>
        <div className={styles["images"]}>
          <Image
            className={clsx(styles["image"], styles["image--1"])}
            src={image2}
            alt="Me"
            sizes="100vw"
            style={{
              width: "40rem",
              height: "auto",
            }}
          />
          <Image
            className={clsx(styles["image"], styles["image--2"])}
            src={image1}
            alt="Me"
            sizes="100vw"
            style={{
              width: "30rem",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className={styles["right"]}>
        <Reveal>
          <h2 className={clsx(styles["title"], dirtyline.className)}>
            h<span style={{ color: vars.accent }}>a</span>Ne
            <span style={{ color: vars.accent }}>E</span>sH r
            <span style={{ color: vars.accent }}>a</span>J
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles["description"]}>
            Hello there! I&apos;m a student of{" "}
            <strong>Northeastern University</strong> doing my Masters in
            Information Systems. I&apos;m a{" "}
            <strong>machine learning and data science student</strong> but
            I&apos;ve been working on creating intricate and fun web development
            projects since 2019.
          </p>
        </Reveal>
        <Reveal>
          <p className={styles["description"]}>
            I am also a <strong>motion graphics designer</strong> since 2014.
            I&apos;ve worked with several clients in the past and deliver the
            highest quality designs. I&apos;ve then gotten UI/UX design and
            taught myself how to be make intricate and animated web designs.
          </p>
        </Reveal>
        <Reveal>
          <p className={styles["description"]}>
            I&apos;ve also work on{" "}
            <strong>music production and sound engineering</strong> since 2020.
            I&apos;ve also released a couple of tracks with several artists
            since 2021.
          </p>{" "}
        </Reveal>
        <div className={styles["btn-container"]}>
          <Reveal type="left">
            <Button
              className={styles.btn}
              href="/about"
              icon={<Element.simpleArrowRight />}
            >
              More about me
            </Button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
