import { useSelector } from 'react-redux';
import s from './UserAvatar.module.css';
import { selectIsAuth, selectUser } from '@/redux/auth/selectors';
import clsx from 'clsx';
import { USERBAR_VARIANTS } from '@/constants';
import PersonIcon from '@mui/icons-material/Person';

const UserAvatar = ({ variant }) => {
  const { name } = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);

  const avatarLetter = name?.split('')[0];

  return (
    <div
      className={clsx(
        s.userAvatar,
        variant === USERBAR_VARIANTS.DRAWER && s.userAvatarDrawer
      )}
    >
      {isAuth ? avatarLetter : <PersonIcon fontSize="small" />}
    </div>
  );
};

export default UserAvatar;
