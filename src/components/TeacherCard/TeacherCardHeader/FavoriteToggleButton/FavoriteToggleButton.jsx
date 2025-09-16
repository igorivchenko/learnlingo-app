import { useState } from 'react';
import s from './FavoriteToggleButton.module.css';
import { motion } from 'motion/react';

const FavoriteToggleButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(prev => !prev);
  };

  return (
    <motion.button
      className={s.button}
      type="button"
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <motion.svg
        key={isFavorite}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          fill: isFavorite ? 'var(--card-icon-favorite-color)' : 'none',
          stroke: isFavorite ? 'none' : 'var(--card-icon-stroke-color)',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20,
          duration: 0.4,
        }}
        className={s.icon}
        width="22"
        height="20"
      >
        <use href="/icons.svg#icon-heart"></use>
      </motion.svg>
    </motion.button>
  );
};

export default FavoriteToggleButton;
