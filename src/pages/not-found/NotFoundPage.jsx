import { Link } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>404</h2>
      <span className={s.description}>Sorry, this page is not found</span>
      <div className={s.linkWrapper}>
        <Link className={s.link} to="/">
          <IoMdHome />
          Home
        </Link>
        <Link className={s.link} to="/teachers">
          <LiaChalkboardTeacherSolid />
          Teachers
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
