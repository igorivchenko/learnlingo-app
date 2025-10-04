import { Link, useLocation } from 'react-router-dom';
import s from './UserMenuItem.module.css';

const UserMenuItem = ({ label, icon, link }) => {
  const location = useLocation();

  const content = (
    <>
      <svg className={s.menuIcon} width="20" height="20">
        <use href={`/icons.svg#${icon}`} />
      </svg>
      {label}
    </>
  );

  return (
    <li className={s.menuItem}>
      {link ? (
        <Link to={link} className={s.menuLink} state={{ background: location }}>
          {content}
        </Link>
      ) : (
        <span className={s.menuText}>{content}</span>
      )}
    </li>
  );
};

export default UserMenuItem;
