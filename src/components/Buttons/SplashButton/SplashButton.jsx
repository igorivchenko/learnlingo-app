import { useState } from 'react';
import s from './SplashButton.module.css';
import clsx from 'clsx';
import SplashCursor from '@/components/SplashCursor';
import AppTooltip from '@/components/AppTooltip';

const SplashButton = () => {
  const [magicCursor, setMagicCursor] = useState(false);

  const switchCursor = () => {
    setMagicCursor(!magicCursor);
  };
  return (
    <>
      {magicCursor && <SplashCursor />}
      <AppTooltip
        title={!magicCursor ? 'Enable magic cursor' : 'Disable magic cursor'}
      >
        <button
          className={clsx(s.button, magicCursor && s.active)}
          type="button"
          onClick={e => {
            switchCursor();
            e.currentTarget.blur();
          }}
        >
          <svg width="20" height="20">
            <use href="/icons.svg#icon-magic-wand"></use>
          </svg>
        </button>
      </AppTooltip>
    </>
  );
};

export default SplashButton;
