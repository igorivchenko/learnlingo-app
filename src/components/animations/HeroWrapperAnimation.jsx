import { motion } from 'motion/react';

const HeroWrapperAnimation = ({
  children,
  initial,
  animate,
  exit,
  transition = { duration: 0.6 },
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

export default HeroWrapperAnimation;
