import s from './TeachersPage.module.css';
import Container from '@/components/Container';
import Section from '@/components/Section';
import TeachersFilters from '@/components/TeachersFilters';
import TeachersList from '@/components/TeachersList';
import LoadMoreButton from '@/components/LoadMoreButton';
import { getTeachers } from '@/redux/teachers/operations';
import {
  selectHasMore,
  selectIsLoading,
  selectTeachers,
  selectTeachersLastDoc,
} from '@/redux/teachers/selectors';
import { resetList } from '@/redux/teachers/slice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTeachersFilters } from '@/redux/filters/selectors';
import { getFavoriteTeachers } from '@/redux/favorite/operations';
import { selectUserId } from '@/redux/auth/selectors';
import { resetFilters, setCurrentContext } from '@/redux/filters/slice';

const TeachersPage = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const isLoading = useSelector(selectIsLoading);
  const teachers = useSelector(selectTeachers);
  const lastDoc = useSelector(selectTeachersLastDoc);
  const hasMore = useSelector(selectHasMore);
  const teacherFilters = useSelector(selectTeachersFilters);

  const [shouldScroll, setShouldScroll] = useState(false);

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    dispatch(setCurrentContext('teachers'));
    return () => dispatch(resetFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetList());
    dispatch(getTeachers({ filters: teacherFilters, lastVisibleDoc: null }));
    dispatch(getFavoriteTeachers({ userId }));
  }, [dispatch, userId, teacherFilters]);

  const handleLoadMore = () => {
    if (lastDoc) {
      setShouldScroll(true);
      dispatch(
        getTeachers({ filters: teacherFilters, lastVisibleDoc: lastDoc })
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
    <Section className={s.section} title="Meet Our Language Instructors">
      <Container size="medium" className={s.container}>
        <TeachersFilters />
        <TeachersList
          isLoading={isLoading}
          teachers={teachers}
          variants={fadeInScale}
        />
        {teachers.length > 0 && hasMore && (
          <LoadMoreButton onClick={handleLoadMore} isLoading={shouldScroll} />
        )}
      </Container>
    </Section>
  );
};

export default TeachersPage;
