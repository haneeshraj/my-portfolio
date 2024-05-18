"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { slide } from "./anim";

const Reveal = ({
  children,
  type = "top",
}: {
  children: React.ReactNode;
  type?: "top" | "bottom" | "left" | "right";
}) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]); //! remove main controls if there are any issues!

  return (
    <motion.div
      variants={slide}
      initial={type}
      animate={mainControls}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
