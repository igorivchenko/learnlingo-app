import { motion } from 'framer-motion';
import s from './SettingsMenu.module.css';
import { useDispatch } from 'react-redux';
import { signOutUser } from '@/redux/auth/operations';
import { errorToast, successToast } from '@/utils/toastUtils';
import { useLocation, Link } from 'react-router-dom';

const SettingsMenu = ({ closeDrawer }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const onLogoutClick = async () => {
    try {
      await dispatch(signOutUser()).unwrap();
      successToast('Logged out successfully');
    } catch (err) {
      errorToast(err);
    }
    closeDrawer?.();
  };

  const buttons = [
    { label: 'Settings', link: '/settings' },
    { label: 'Log Out', onClick: onLogoutClick },
  ];

  const motionProps = idx => ({
    initial: { x: 60, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.4, delay: idx * 0.2 },
    viewport: { once: true, margin: '0px 0px -30px 0px' },
  });

  return (
    <div className={s.wrapper}>
      {buttons.map((btn, idx) =>
        btn.link ? (
          <motion.div key={btn.label} {...motionProps(idx)}>
            <Link
              to={btn.link}
              state={{ background: location }}
              className={s.button}
              onClick={closeDrawer}
            >
              {btn.label}
            </Link>
          </motion.div>
        ) : (
          <motion.button
            key={btn.label}
            type="button"
            className={s.button}
            onClick={btn.onClick}
            {...motionProps(idx)}
          >
            {btn.label}
          </motion.button>
        )
      )}
    </div>
  );
};

export default SettingsMenu;
