import React from 'react';
import { Tooltip, tooltipClasses } from '@mui/material';

const AppTooltip = ({ title, placement = 'bottom', children }) => {
  return (
    <Tooltip
      title={title}
      placement={placement}
      slotProps={{
        popper: {
          sx: {
            [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
              { marginTop: '4px' },
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
};

export default AppTooltip;
