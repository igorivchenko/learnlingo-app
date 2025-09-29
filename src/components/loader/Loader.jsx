import { ScaleLoader } from 'react-spinners';
import s from './Loader.module.css';
import clsx from 'clsx';

const Loader = ({ center, ...props }) => {
  return (
    <div className={clsx(s.loader, center && s.center)}>
      <ScaleLoader barCount={7} {...props} />
    </div>
  );
};

export default Loader;
