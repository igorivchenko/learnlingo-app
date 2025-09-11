import { ScaleLoader } from 'react-spinners';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <ScaleLoader
        barCount={7}
        color="var(--color-accent)"
        speedMultiplier={0.7}
      />
    </div>
  );
};

export default Loader;
