export const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

export const childAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const childScaleAnimation = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export const childHorizontalAnimation = {
  hidden: { x: -25, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const opacityAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

export const horizontalAnimation = {
  hidden: { x: -25, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};
