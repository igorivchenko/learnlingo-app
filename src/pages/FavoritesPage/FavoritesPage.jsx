import { motion } from 'motion/react';
import Section from '@/components/Section';
import s from './FavoritesPage.module.css';
import Container from '@/components/Container';
import TeachersFilters from '@/components/TeachersFilters';
import TeachersList from '@/components/TeachersList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoriteTeachers,
  selectIsLoading,
} from '@/redux/favorite/selectors';
import { useEffect, useState } from 'react';
import { getFavoriteTeachers } from '@/redux/favorite/operations';
import { selectUserId } from '@/redux/auth/selectors';
import Loader from '@/components/Loader';
import LoadMoreButton from '@/components/LoadMoreButton';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const teachers = useSelector(selectFavoriteTeachers);
  const userId = useSelector(selectUserId);
  const [visibleCount, setVisibleCount] = useState(4);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (userId) {
      dispatch(getFavoriteTeachers(userId));
    }
  }, [dispatch, userId]);

  const handleLoadMore = () => {
    setShouldScroll(true);
    setVisibleCount(prev => Math.min(prev + 4, teachers.length));
  };

  useEffect(() => {
    if (shouldScroll) {
      const viewportHeight = window.innerHeight;
      window.scrollBy({
        top: viewportHeight * 0.69,
        behavior: 'smooth',
      });
      setShouldScroll(false);
    }
  }, [visibleCount, shouldScroll]);

  const visibleTeachers = teachers.slice(0, visibleCount);

  return (
    <Section className={s.section} title="My Favorite Teachers">
      <Container size="medium" className={s.container}>
        <TeachersFilters />

        {isLoading ? (
          <Loader
            top
            color="var(--color-accent)"
            height={30}
            width={4}
            margin={2.3}
          />
        ) : (
          <>
            <TeachersList isLoading={isLoading} teachers={visibleTeachers} />

            {visibleCount < teachers.length && (
              <LoadMoreButton
                onClick={handleLoadMore}
                isLoading={shouldScroll}
              />
            )}
          </>
        )}
      </Container>
    </Section>
  );
};

export default FavoritesPage;
