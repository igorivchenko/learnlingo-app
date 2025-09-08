import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useState } from 'react';

const CounterAnimation = ({ to, duration = 1, suffix = '' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on('change', v =>
      setDisplay(v.toLocaleString('en-US'))
    );

    const controls = animate(count, to, { duration });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [count, rounded, to, duration]);

  return (
    <motion.span>
      {display} {suffix}
    </motion.span>
  );
};

export default CounterAnimation;
