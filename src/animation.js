import { transform } from "framer-motion";

export const pageAnimation = {
  // initial
  hidden: {
    opacity: 0,
    y: 300,
  },
  // animate
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  // fade out
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

// export naar de AboutSection Component
export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transiton: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeIn",
    },
  },
};

export const photoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};
