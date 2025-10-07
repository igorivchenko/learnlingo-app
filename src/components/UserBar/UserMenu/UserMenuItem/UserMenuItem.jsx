import s from './UserMenuItem.module.css';

const UserMenuItem = ({ label, icon, onClick }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      <svg className={s.menuIcon} width="20" height="20">
        <use href={`/icons.svg#${icon}`} />
      </svg>
      <span className={s.label}>{label}</span>{' '}
    </button>
  );
};

export default UserMenuItem;
