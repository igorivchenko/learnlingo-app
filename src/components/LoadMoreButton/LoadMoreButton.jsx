import { useSelector } from 'react-redux';
import s from './LoadMoreButton.module.css';
import Loader from '@/components/Loader';
import { selectIsLoading } from '@/redux/teachers/selectors';

const LoadMoreButton = ({ onClick }) => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <button className={s.button} type="button" onClick={onClick}>
      {isLoading ? <Loader height={22} width={3} margin={1.5} /> : ' Load More'}
    </button>
  );
};

export default LoadMoreButton;
