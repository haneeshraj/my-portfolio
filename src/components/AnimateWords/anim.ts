export const slide = {
    initial: {
      y: "110%",
    },
    animate: ({index, duration, delay, iDelay, ease}: {
        index: number;
        duration: number;
        delay: number;
        iDelay: number;
        ease: [number, number, number, number];
    }) => ({
      y: 0,
      transition: {
        duration,
        ease,
        delay: delay + index * iDelay,
      },
    }),
  };