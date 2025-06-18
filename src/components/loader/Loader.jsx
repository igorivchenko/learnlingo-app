import { ScaleLoader } from 'react-spinners';
import s from '@/components/loader/Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <ScaleLoader barCount={7} color="#F4C550" speedMultiplier={0.7} />
    </div>
  );
};

export default Loader;
