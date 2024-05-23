"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

import { Project, projects } from "@/config/projects";
import dirtyline from "@/fonts/dirtyline/font";
import vars from "@/config/variables.module.scss";
import styles from "./styles.module.scss";
import ProjectItem from "@/components/projectItem/ProjectItem";
import Reveal from "@/components/reveal/Reveal";
import Button from "@/components/button/Button";
import Element from "@/components/element/Element";
import Link from "next/link";

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web");
  const [isOpen, setIsOpen] = useState(false);

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
        <h2 className={clsx(styles["heading"], dirtyline.className)}>
          Pr<span style={{ color: vars.accent }}>o</span>jEc
          <span style={{ color: vars.accent }}>t</span>
        </h2>
      </Reveal>

      <div className={styles["projects"]}>
        <Reveal>
          <div className={styles["dropdown"]}>
            <div
              className={clsx(
                styles["dropdown__selector"],
                isOpen && styles["dropdown__selector--open"]
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={styles["dropdown__title"]}>
                {selectedCategory}
              </span>
              <div className={styles["dropdown__icon"]}>
                <Element.simpleArrowRight />
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div className={clsx(styles["dropdown__menu"])}>
                  <AnimatePresence>
                    {categories.map((category, index) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10, filter: "blur(2rem)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.65, 0.05, 0, 1],
                          delay: 0.1 * index,
                        }}
                        key={category}
                        className={clsx(
                          styles["dropdown__item"],
                          category === selectedCategory &&
                            styles["dropdown__item--selected"]
                        )}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsOpen(false);
                        }}
                      >
                        {category}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
        <div className={styles["project-container"]}>
          <div className={styles["project"]}>
            {projects
              .filter((projects) => projects.type === selectedCategory)
              .map((project, index) => (
                <ProjectItem
                  key={project.name}
                  project={project}
                  index={index}
                />
              ))}
          </div>

          <div className={styles["btn-container"]}>
            <Button
              href={`/work?type=${selectedCategory
                .toLowerCase()
                .replace(" ", "_")
                .replace("/", "_")}`}
              icon={<Element.simpleArrowRight />}
            >
              Show more project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
