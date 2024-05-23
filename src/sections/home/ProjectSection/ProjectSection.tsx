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
    </div>
  );
};

export default ProjectSection;
