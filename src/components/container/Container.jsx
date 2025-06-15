import s from '@/components/container/Container.module.css';
import clsx from 'clsx';

const Container = ({ children, className = '' }) => {
  return <div className={clsx(s[className])}>{children}</div>;
};

export default Container;
