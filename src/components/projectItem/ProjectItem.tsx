import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import { Project } from "@/config/projects";
import Icon from "../icon/Icon";
import Element from "../element/Element";

const ProjectItem = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      className={styles["project-item"]}
      initial={{ opacity: 0, y: 20, filter: "blur(3rem)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: [0.65, 0.05, 0, 0.97],
      }}
      exit={{ opacity: 0 }}
    >
      <div className={styles["project-item__images"]}>
        <Link href={project.live}>
          <Icon.link className={styles.link} />
        </Link>
        <div
          className={clsx(
            styles["project-item__image"],
            styles["project-item__image--1"]
          )}
        >
          <Image
            src={project.images[0]}
            alt={project.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className={clsx(
            styles["project-item__image"],
            styles["project-item__image--2"]
          )}
        >
          <Image
            src={project.images[1]}
            alt={project.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className={clsx(
            styles["project-item__image"],
            styles["project-item__image--3"]
          )}
        >
          <Image
            src={project.images[2]}
            alt={project.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className={styles["project-item__info"]}>
        <div className={styles["project-item__text"]}>
          <Element.simpleArrowRight className={styles.arrow} />
          <span className={styles["project-item__name"]}>{project.name}</span>
        </div>

        <div className={styles["project-item__icons"]}>
          <Link
            href={`/work/${project.type
              .toLowerCase()
              .replace(" ", "_")
              .replace("/", "_")}/${project.id}`}
            className={styles["icon"]}
          >
            <Icon.info height="20" width="20" />
          </Link>
          <Link href={`${project.source}`} className={styles["icon"]}>
            <Icon.github height="14" width="14" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
