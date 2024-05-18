export const slide = {
  top: {
    opacity: 0,
    filter: "blur(2rem)",

    y: "3rem",
  },
  bottom: {
    opacity: 0,
    filter: "blur(2rem)",
    y: "-3rem",
  },
  left: {
    opacity: 0,
    filter: "blur(2rem)",
    x: "-3rem",
  },
  right: {
    opacity: 0,
    filter: "blur(2rem)",
    x: "3rem",
  },
  animate: {
    filter: "blur(0rem)",
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.43, 0.22, 0.05, 0.96],
      delay: 0.2,
    },
  },
};
