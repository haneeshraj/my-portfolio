export const slide = {
  initial: {
    y: 40,
    opacity: 0,
    filter: "blur(3rem)",
  },
  animate: (i: number) => ({
    filter: "blur(0)",
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.42, 0.02, 0, 0.92],
      delay: 0.1 + i * 0.05,
    },
  }),
};
