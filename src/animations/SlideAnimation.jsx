import { motion } from 'motion/react';

const SlideAnimation = ({
  children,
  initial,
  animate,
  exit,
  transition = { duration: 0.4 },
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default SlideAnimation;
