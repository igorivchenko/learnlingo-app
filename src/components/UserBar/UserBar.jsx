import { useSelector } from 'react-redux';
import s from './UserBar.module.css';
import { selectName } from '@/redux/auth/selectors';
import UserAvatar from './UserAvatar';

const UserBar = () => {
  const userName = useSelector(selectName);

  const firstName = userName?.split(' ')[0];

  return (
    <>
      <button type="button" className={s.userBar}>
        <UserAvatar />
        <span className={s.userName}>{firstName}</span>
      </button>
    </>
  );
};

export default UserBar;
