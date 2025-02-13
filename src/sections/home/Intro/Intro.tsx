import styles from "./styles.module.scss";
import AnimatedText from "@/components/AnimateText/AnimateText";
import AnimatedWord from "@/components/AnimateWords/AnimateWord";

export default function Intro() {
  return (
    <section className={styles["intro"]}>
      <div style={{ textAlign: "center" }}>
        <AnimatedText
          type="p"
          text="HANEESH RAJ B."
          className={styles["name"]}
        />
      </div>
      <div className={styles["intro__text-container"]}>
        <AnimatedWord
          type="p"
          text="Lorem ipsum dolor sit amet consectetur. Amet ullamcorper tortor in vel nibh nulla viverra. Sagittis facilisis consequat sagittis a integer. Eleifend augue."
          className={styles["description-left"]}
          duration={1}
          iDelay={0.05}
        />

        <AnimatedWord
          type="p"
          text="Lorem ipsum dolor sit amet consectetur. Dolor vitae a est at rhoncus. "
          className={styles["description-right"]}
          duration={1}
          iDelay={0.05}
        />
      </div>
    </section>
  );
}
