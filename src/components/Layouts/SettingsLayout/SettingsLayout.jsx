import s from './SettingsLayout.module.css';
import SettingsSidebar from '@/components/SettingsSidebar';

const SettingsLayout = () => {
  return (
    <div className={s.wrapper}>
      <SettingsSidebar />
    </div>
  );
};

export default SettingsLayout;
