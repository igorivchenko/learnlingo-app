import s from './TeachersPage.module.css';
import Container from '@/components/Container';
import Section from '@/components/Section';
import TeachersFilters from '@/components/TeachersFilters';
import TeachersList from '@/components/TeachersList';

const TeachersPage = () => {
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
