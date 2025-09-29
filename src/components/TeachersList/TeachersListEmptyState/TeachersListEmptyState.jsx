import { Link } from 'react-router-dom';
import s from './TeachersListEmptyState.module.css';
import { IoMdHome } from 'react-icons/io';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';

const TeachersListEmptyState = () => {
  return (
    <>
      <p className={s.emptyState}>
        No favorite teachers found. Add your favorites!
      </p>
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
    </>
  );
};

export default TeachersListEmptyState;
