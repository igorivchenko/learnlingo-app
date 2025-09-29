import s from './FavoriteToggleButton.module.css';
import { motion } from 'motion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useTeacher } from '@/context/TeacherContext';
import { selectIsAuth, selectUserId } from '@/redux/auth/selectors';
import { selectFavoriteTeachers } from '@/redux/favorite/selectors';
import { errorToast } from '@/utils/toastUtils';
import {
  addFavoriteTeacher,
  removeFavoriteTeacher,
} from '@/redux/favorite/operations';

const FavoriteToggleButton = () => {
  const dispatch = useDispatch();
  const { id } = useTeacher();
  const userId = useSelector(selectUserId);
  const isAuth = useSelector(selectIsAuth);
  const favorites = useSelector(selectFavoriteTeachers);
  const isFavorite = favorites.some(favorite => favorite.id === id);

  const handleClick = () => {
    if (!isAuth) {
      return errorToast('Please log in to add a teacher to your favorites');
    }

    isFavorite
      ? dispatch(removeFavoriteTeacher({ userId: userId, teacherId: id }))
      : dispatch(addFavoriteTeacher({ userId: userId, teacherId: id }));
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
          fill:
            isFavorite && isAuth ? 'var(--card-icon-favorite-color)' : 'none',
          stroke:
            isFavorite && isAuth ? 'none' : 'var(--card-icon-stroke-color)',
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
