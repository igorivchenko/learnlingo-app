import { useState } from 'react';
import { motion } from 'motion/react';
import TeacherAvatar from './TeacherAvatar';
import s from './TeacherCard.module.css';
import TeacherCardHeader from './TeacherCardHeader';
import TeacherCardInfo from './TeacherCardInfo';
import TeacherCardList from './TeacherCardList';
import TeacherDetails from './TeacherDetails';
import TrialLessonButton from './TrialLessonButton';
import { useResponsive } from '@/hooks/useResponsive';
import { useDispatch } from 'react-redux';
import { openModal } from '@/redux/modals/slice';
import { TeacherProvider } from '@/context/TeacherContext';
import { MODAL_TYPES } from '@/constants';

const TeacherCard = ({ teacher }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(prev => !prev);
  const { isTabletL } = useResponsive();
  const dispatch = useDispatch();

  const handleBookLesson = () => {
    dispatch(
      openModal({
        type: MODAL_TYPES.BOOK_TRIAL,
        props: { teacher },
      })
    );
  };

  return (
    <TeacherProvider teacher={teacher}>
      <article className={s.card}>
        {!isTabletL && <TeacherAvatar />}
        <div className={s.content}>
          <TeacherCardHeader />
          <TeacherCardInfo />

          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <TeacherDetails />
            </motion.div>
          )}

          {!isExpanded && (
            <motion.button
              className={s.button}
              type="button"
              onClick={toggleExpanded}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              Read More
            </motion.button>
          )}

          <TeacherCardList />

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TrialLessonButton onClick={handleBookLesson} />
            </motion.div>
          )}
        </div>
      </article>
    </TeacherProvider>
  );
};

export default TeacherCard;
