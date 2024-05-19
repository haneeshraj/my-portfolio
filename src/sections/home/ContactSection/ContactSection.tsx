import AnimatedText from "@/components/animatedText/AnimatedText";
import styles from "./styles.module.scss";
import Reveal from "@/components/reveal/Reveal";

const ContactSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <AnimatedText
          text="haneeshraj.banisetti@gmail.com"
          type="h3"
          className={styles.email}
        />
        <Reveal>
          <p className={styles.subtext}>
            Want to work together? Let&apos;s get in touch!
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default ContactSection;
