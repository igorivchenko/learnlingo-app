import { ClipLoader } from 'react-spinners';
import s from './LoadMoreButton.module.css';

const LoadMoreButton = () => {
  const isLoading = false;
  return (
    <button className={s.button} type="button">
      {isLoading ? <ClipLoader size={28} /> : ' Load More'}
    </button>
  );
};

export default LoadMoreButton;
