import { Link } from 'react-router-dom';
import s from './HeroButton.module.css';
import { ROUTES } from '@/constants';

const HeroButton = () => {
  return (
    <Link className={s.button} to={ROUTES.TEACHERS}>
      Get started
    </Link>
  );
};

export default HeroButton;
