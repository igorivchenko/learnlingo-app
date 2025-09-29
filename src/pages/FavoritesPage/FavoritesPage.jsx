import Section from '@/components/Section';
import s from './FavoritesPage.module.css';
import Container from '@/components/Container';
import TeachersFilters from '@/components/TeachersFilters';
import TeachersList from '@/components/TeachersList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoriteTeachers,
  selectHasMore,
  selectIsLoading,
  selectTeachersLastDoc,
} from '@/redux/favorite/selectors';
import { useEffect, useState } from 'react';
import { getFavoriteTeachers } from '@/redux/favorite/operations';
import { selectUserId } from '@/redux/auth/selectors';
import LoadMoreButton from '@/components/LoadMoreButton';
import { selectFavoritesFilters } from '@/redux/filters/selectors';
import { resetFavoritesTeachers } from '@/redux/favorite/slice';
import {
  resetFavoritesFilters,
  setCurrentContext,
} from '@/redux/filters/slice';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const teachers = useSelector(selectFavoriteTeachers);
  const userId = useSelector(selectUserId);
  const lastDoc = useSelector(selectTeachersLastDoc);
  const hasMore = useSelector(selectHasMore);
  const [shouldScroll, setShouldScroll] = useState(false);
  const favoritesFilters = useSelector(selectFavoritesFilters);

  const slideFromLeft = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    dispatch(setCurrentContext('favorites'));
    return () => dispatch(resetFavoritesFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentContext('favorites'));
    dispatch(resetFavoritesTeachers());
    if (userId) {
      dispatch(
        getFavoriteTeachers({
          filters: favoritesFilters,
          lastVisibleDoc: null,
          userId,
        })
      );
    }
  }, [dispatch, userId, favoritesFilters]);

  const handleLoadMore = () => {
    if (lastDoc) {
      setShouldScroll(true);
      dispatch(
        getFavoriteTeachers({
          filters: favoritesFilters,
          lastVisibleDoc: lastDoc,
          userId,
        })
      );
    }
  };

  useEffect(() => {
    if (!isLoading && shouldScroll) {
      const viewportHeight = window.innerHeight;

      window.scrollBy({
        top: viewportHeight * 0.69,
        behavior: 'smooth',
      });
      setShouldScroll(false);
    }
  }, [isLoading, shouldScroll]);

  return (
    <Section className={s.section} title="My Favorite Teachers">
      <Container size="medium" className={s.container}>
        <TeachersFilters />
        <TeachersList
          isLoading={isLoading}
          teachers={teachers}
          variants={slideFromLeft}
        />
        {teachers.length > 0 && hasMore && (
          <LoadMoreButton onClick={handleLoadMore} isLoading={shouldScroll} />
        )}
      </Container>
    </Section>
  );
};

export default FavoritesPage;
