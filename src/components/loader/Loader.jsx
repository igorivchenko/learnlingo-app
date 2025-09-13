import { ScaleLoader } from 'react-spinners';
import s from './Loader.module.css';
import clsx from 'clsx';

const Loader = ({ top, ...props }) => {
  return (
    <div className={clsx(s.loader, top && s.top)}>
      <ScaleLoader barCount={7} {...props} />
    </div>
  );
};

export default Loader;
