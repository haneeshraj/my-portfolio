export const navItemsAnim: {
  initial: object;
  animate: object | (() => object);
} = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.2,
      duration: 1,
      ease: [0.36, 0.02, 0, 0.99],
    },
  }),
};
