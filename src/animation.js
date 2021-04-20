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
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  // fade out
  exit: {
    opacity: 0,
    y: 200,
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
  },
  show: {
    opacity: 1,
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

export const lineAnim = {
  // percentages moeten in ''
  hidden: { width: '0%' },
  show: {
    width: '100%',
    transition: {
      duration: 1
    }
  }
}

// voor de Frames 1,2,3 en 4
export const slider = {
  hidden: {
    x: '-130%',
    skew: '45deg'
  },
  show: {
    x: '100%',
    skew: '0deg',
    transition: {ease: "easeOut", duration: 1}
  }
}

// als wrapper voor de Frames 1,2,3 en 4
export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {opacity: 1, transition: {staggerChildren: 0.1, ease: 'easeOut'}}
}

export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    }
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    }
  }
}