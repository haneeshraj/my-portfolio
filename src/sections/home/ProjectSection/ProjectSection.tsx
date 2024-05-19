"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

import { projects } from "@/config/projects";
import dirtyline from "@/fonts/dirtyline/font";
import vars from "@/config/variables.module.scss";
import styles from "./styles.module.scss";
import ProjectItem from "@/components/projectItem/ProjectItem";
import Reveal from "@/components/reveal/Reveal";
import Button from "@/components/button/Button";
import Element from "@/components/element/Element";
import Link from "next/link";

const CategoryItem = ({
  category,
  index,
  selectedCategory,
  setSelectedCategory,
}: {
  category: string;
  index: number;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once when the element comes into view
    threshold: 0.1, // percentage of the element's visibility before triggering
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, filter: "blur(3rem)", y: 20 }}
      animate={{
        opacity: inView ? 1 : 0,
        filter: inView ? "blur(0)" : "blur(3rem)",
        y: inView ? 0 : 20,
      }}
      transition={{
        delay: index * 0.1,
        duration: 1,
        ease: [0.65, 0.05, 0, 0.98],
      }}
      className={clsx(
        styles["selector__item"],
        category === selectedCategory && styles["selector__item--active"]
      )}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </motion.span>
  );
};

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web");

  const categories = [
    "Web",
    "ML/AI",
    "Motion Design",
    "Graphic Design",
    "VFX",
    "Music",
  ];

  return (
    <div className={styles.container}>
      <Reveal>
        <h2 className={clsx(dirtyline.className, styles.title)}>
          <span style={{ color: vars.accent }}>p</span>rOj
          <span style={{ color: vars.accent }}>E</span>c
          <span style={{ color: vars.accent }}>t</span>S
        </h2>
      </Reveal>

      <div className={styles.selector}>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            index={index}
            category={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
      <Reveal>
        <div className={styles.projects}>
          <div className={styles["projects__grid"]}>
            {projects
              .filter((project) => project.type === selectedCategory)
              .map((project, index) => (
                <ProjectItem key={project.id} project={project} index={index} />
              ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <Button
          icon={<Element.simpleArrowRight />}
          href={`/work?type=${selectedCategory
            .toLowerCase()
            .replace(" ", "_")
            .replace("/", "_")}`}
          className={styles["btn"]}
        >
          Show more
        </Button>
      </Reveal>
    </div>
  );
};

export default ProjectSection;
