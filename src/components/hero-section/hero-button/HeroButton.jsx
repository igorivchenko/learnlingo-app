import { Link } from 'react-router-dom';
import s from './HeroButton.module.css';

const HeroButton = () => {
  return (
    <Link className={s.button} to="/teachers">
      Get started
    </Link>
  );
};

export default HeroButton;
