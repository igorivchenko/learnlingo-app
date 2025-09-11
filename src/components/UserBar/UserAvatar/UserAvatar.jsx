import { useSelector } from 'react-redux';
import s from './UserAvatar.module.css';
import { selectName } from '@/redux/auth/selectors';

const UserAvatar = () => {
  const userName = useSelector(selectName);

  const avatarLetter = userName?.split('')[0];

  return <div className={s.userAvatar}>{avatarLetter}</div>;
};

export default UserAvatar;
