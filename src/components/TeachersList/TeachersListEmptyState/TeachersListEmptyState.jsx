import { useLocation } from 'react-router-dom';
import s from './TeachersListEmptyState.module.css';
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

  return <p className={messageClass}>{message}</p>;
};

export default TeachersListEmptyState;
