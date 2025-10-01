import { motion } from 'framer-motion';
import s from './SettingsMenu.module.css';
import { useDispatch } from 'react-redux';
import { signOutUser } from '@/redux/auth/operations';
import { errorToast, successToast } from '@/utils/toastUtils';

const SettingsMenu = ({ closeDrawer, onSettingsClick }) => {
  const dispatch = useDispatch();

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
    { label: 'Settings', onClick: onSettingsClick },
    { label: 'Log Out', onClick: onLogoutClick },
  ];

  return (
    <div className={s.wrapper}>
      {buttons.map((btn, idx) => (
        <motion.button
          key={btn.label}
          type="button"
          className={s.button}
          onClick={btn.onClick}
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: idx * 0.2 }}
          viewport={{ once: true, margin: '0px 0px -30px 0px' }}
        >
          {btn.label}
        </motion.button>
      ))}
    </div>
  );
};

export default SettingsMenu;
