import clsx from 'clsx';
import s from './Container.module.css';

const Container = ({ children, className, size = 'large' }) => {
  return (
    <div className={clsx(s.container, s[size], className)}>{children}</div>
  );
};

export default Container;
