import s from './SettingsLayout.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import SettingsModal from '@/components/Modals/SettingsModal';
import SettingsSidebar from '@/components/SettingsSidebar';

const SettingsLayout = () => {
  const navigate = useNavigate();

  const handleClose = () => navigate('/');

  return (
    <SettingsModal>
      <div className={s.wrapper}>
        <SettingsSidebar />

        <main className={s.content}>
          <Outlet />
        </main>

        <button className={s.close} onClick={handleClose}>
          <svg width="20" height="20">
            <use href="/icons.svg#icon-close"></use>
          </svg>
        </button>
      </div>
    </SettingsModal>
  );
};

export default SettingsLayout;
