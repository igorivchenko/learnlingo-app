import s from './AuthDivider.module.css';

const AuthDivider = ({ text = 'or' }) => {
  return (
    <div className={s.divider}>
      <span>{text}</span>
    </div>
  );
};

export default AuthDivider;
