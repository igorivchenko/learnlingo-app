import s from '@/components/container/Container.module.css';
import clsx from 'clsx';

const Container = ({ children, size = 'large', display = '' }) => {
  return (
    <div className={clsx(s.container, s[size], s[display])}>{children}</div>
  );
};

export default Container;
