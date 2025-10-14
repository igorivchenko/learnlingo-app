import { useMemo } from 'react';
import s from './SelectField.module.css';
import { FormControl, Select, MenuItem, FormHelperText } from '@mui/material';
import CustomSelectIcon from './CustomSelectIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentContext,
  selectFavoritesFilters,
  selectTeachersFilters,
} from '@/redux/filters/selectors';
import { setFavoritesFilter, setFilters } from '@/redux/filters/slice';
import { CONTEXTS } from '@/constants';
import { useResponsive } from '@/hooks/useResponsive';

const SelectField = ({
  label,
  name,
  options,
  register,
  errors,
  sxFormControl = {},
  sxSelect = {},
  showDollar = false,
}) => {
  const dispatch = useDispatch();
  const currentContext = useSelector(selectCurrentContext);
  const filters = useSelector(
    currentContext === CONTEXTS.TEACHERS
      ? selectTeachersFilters
      : selectFavoritesFilters
  );
  const selectedValue = useMemo(() => filters[name] || '', [filters, name]);
  const { isMobile } = useResponsive();

  const handleChange = e => {
    const { value } = e.target;
    currentContext === CONTEXTS.TEACHERS
      ? dispatch(setFilters({ [name]: value }))
      : dispatch(setFavoritesFilter({ [name]: value }));
  };

  return (
    <FormControl sx={sxFormControl} error={!!errors[name]}>
      <FormHelperText
        sx={{
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.28,
          marginLeft: 0,
          marginBottom: '8px',
          color: 'var(--color-select-label)',
          ...(isMobile && {
            textAlign: 'center',
          }),
        }}
      >
        {label}
      </FormHelperText>
      <Select
        labelId={`${name}-label`}
        id={name}
        {...register(name)}
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        IconComponent={CustomSelectIcon}
        sx={{
          borderRadius: '14px',
          '& fieldset': { border: 'none' },

          ...sxSelect,
          ...(isMobile && {
            textAlign: 'center',
            minWidth: '232px',
            '& .MuiSelect-select': {
              padding: '14px 12px',
            },
          }),
        }}
        renderValue={selected => {
          const option = options.find(o => o.value === selected);
          return option ? (
            <span className={s.value}>
              {option.label} {showDollar ? '$' : ''}
            </span>
          ) : (
            <span style={{ color: '#999' }}>{label}</span>
          );
        }}
        MenuProps={{
          disableScrollLock: true,
          PaperProps: {
            sx: {
              marginTop: '4px',
              borderRadius: '12px',
            },
          },
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              fontSize: '18px',
              color:
                option.value === selectedValue
                  ? '#121417'
                  : 'rgba(18, 20, 23, 0.5)',
              fontWeight: option.value === selectedValue ? 500 : 400,
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
