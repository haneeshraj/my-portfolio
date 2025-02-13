export const slide = {
    initial: {
      y: "110%",
      opacity: 0,
    },
    animate: ({index, duration, delay, iDelay, ease}: {
        index: number;
        duration: number;
        delay: number;
        iDelay: number;
        ease: [number, number, number, number];
    }) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: ease,
        delay: delay + index * iDelay,
      },
    }),
  };