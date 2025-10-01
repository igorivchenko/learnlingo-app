import { Link, useLocation } from 'react-router-dom';
import s from './TeachersListEmptyState.module.css';
import { IoMdHome } from 'react-icons/io';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { ROUTES } from '@/constants';

const TeachersListEmptyState = () => {
  const { pathname } = useLocation();
  const isFavorites = pathname === ROUTES.FAVORITES;

  const message = isFavorites
    ? 'No favorite teachers found. Add your favorites!'
    : 'Sorry, no teachers found!';

  const messageClass = isFavorites
    ? s.emptyStateFavorites
    : s.emptyStateTeachers;

  return (
    <>
      <p className={messageClass}>{message}</p>

      <div className={s.linkWrapper}>
        <Link className={s.link} to={ROUTES.HOME}>
          <IoMdHome />
          Home
        </Link>
        {isFavorites && (
          <Link className={s.link} to={ROUTES.TEACHERS}>
            <LiaChalkboardTeacherSolid />
            Teachers
          </Link>
        )}
      </div>
    </>
  );
};

export default TeachersListEmptyState;
