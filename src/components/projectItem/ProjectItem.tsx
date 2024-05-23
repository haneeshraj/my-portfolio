import { useInView } from "react-intersection-observer";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import { Project } from "@/config/projects";
import Icon from "../icon/Icon";
import Element from "../element/Element";

const ProjectItem = ({ project }: { project: Project }) => {};

export default ProjectItem;
