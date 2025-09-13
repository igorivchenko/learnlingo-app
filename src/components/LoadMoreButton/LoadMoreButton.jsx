import s from './LoadMoreButton.module.css';
import Loader from '@/components/Loader';

const LoadMoreButton = () => {
  const isLoading = false;
  return (
    <button className={s.button} type="button">
      {isLoading ? <Loader height={22} width={3} margin={1.5} /> : ' Load More'}
    </button>
  );
};

export default LoadMoreButton;
