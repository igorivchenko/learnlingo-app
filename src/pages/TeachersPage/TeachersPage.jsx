import s from './TeachersPage.module.css';
import Container from '@/components/Container';
import Section from '@/components/Section';
import TeachersFilters from '@/components/TeachersFilters';
import TeachersList from '@/components/TeachersList';
import { getTeachers } from '@/redux/teachers/operations';
import { resetList } from '@/redux/teachers/slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const TeachersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetList());
    dispatch(getTeachers({ filters: {}, lastVisibleDoc: null }));
  }, [dispatch]);

  return (
    <Section className={s.section} title="Teachers section">
      <Container size="medium" className={s.container}>
        <TeachersFilters />
        <TeachersList />
      </Container>
    </Section>
  );
};

export default TeachersPage;
