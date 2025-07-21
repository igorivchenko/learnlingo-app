import { Link } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import s from './NotFoundPage.module.css';
import FuzzyText from '@/animations/fuzzy-text/FuzzyText';

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        color="var(--color-main)"
      >
        404
      </FuzzyText>{' '}
      <span className={s.description}>Sorry, this page is not found</span>
      <div className={s.linkWrapper}>
        <Link className={s.link} to="/">
          <IoMdHome />
          Home
        </Link>
        <Link className={s.link} to="/teachers">
          <LiaChalkboardTeacherSolid />
          Teachers
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
