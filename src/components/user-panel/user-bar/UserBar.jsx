import { selectName } from '@/redux/auth/selectors';
import { useSelector } from 'react-redux';
import { FaRegCircleUser } from 'react-icons/fa6';
import s from './UserBar.module.css';

const UserBar = () => {
  const userName = useSelector(selectName);

  const firstName = userName?.split(' ')[0];

  return (
    <>
      <div className={s.userBar}>
        <FaRegCircleUser />
        <span className={s.userName}>{firstName}</span>
      </div>
    </>
  );
};

export default UserBar;
