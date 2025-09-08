import clsx from 'clsx';
import s from './Container.module.css';

const Container = ({ children, className, size = 'large', display = '' }) => {
  return (
    <div className={clsx(s.container, s[size], s[display], className)}>
      {children}
    </div>
  );
};

export default Container;
