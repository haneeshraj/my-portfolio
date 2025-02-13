import styles from "./styles.module.scss";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

export default function VideoReel() {
  return (
    <>
      <div className={styles["container"]}>
        <VideoPlayer src="/test.mp4" />
      </div>
    </>
  );
}
