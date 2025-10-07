import { useSelector } from 'react-redux';
import s from './UserAvatar.module.css';
import { selectIsAuth, selectUser } from '@/redux/auth/selectors';
import clsx from 'clsx';
import { USERBAR_VARIANTS } from '@/constants';
import PersonIcon from '@mui/icons-material/Person';

const UserAvatar = ({ variant }) => {
  const { name, photoURL } = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);

  const avatarLetter = name?.charAt(0)?.toUpperCase();

  const renderAvatarContent = () => {
    if (!isAuth) {
      return <PersonIcon fontSize="small" />;
    }

    if (photoURL) {
      return (
        <img
          src={photoURL}
          alt={name || 'User'}
          className={s.avatarImg}
          referrerPolicy="no-referrer"
        />
      );
    }

    return <span className={s.avatarLetter}>{avatarLetter}</span>;
  };

  return (
    <div
      className={clsx(
        s.userAvatar,
        variant === USERBAR_VARIANTS.DRAWER && s.userAvatarDrawer
      )}
    >
      {renderAvatarContent()}
    </div>
  );
};

export default UserAvatar;
