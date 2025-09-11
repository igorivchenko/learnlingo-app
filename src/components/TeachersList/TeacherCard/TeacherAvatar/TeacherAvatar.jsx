import s from './TeacherAvatar.module.css';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(() => ({
  '&.MuiBadge-root': {
    position: 'static',
  },
  '& .MuiBadge-badge': {
    backgroundColor: 'var(--color-accent-green)',
    color: 'var(--color-accent-green)',
    boxShadow: `0 0 0 2px var(--color-bg-card)`,
    top: '23px',
    right: '23px',

    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const TeacherAvatar = ({ data }) => {
  //   const { avatar_url, name } = data;

  return (
    <div className={s.wrapper}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar
          src={'/swADjAuobin2RubX.jpg'}
          alt={name || ''}
          sx={{
            borderRadius: '100%',
            width: {
              xs: 58,
              sm: 66,
              lg: 96,
            },
            height: {
              xs: 58,
              sm: 66,
              lg: 96,
            },
          }}
        />
      </StyledBadge>
    </div>
  );
};

export default TeacherAvatar;
