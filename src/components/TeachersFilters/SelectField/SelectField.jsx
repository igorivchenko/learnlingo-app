import React, { useMemo } from 'react';
import { FormControl, Select, MenuItem, FormHelperText } from '@mui/material';
import CustomSelectIcon from './CustomSelectIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoritesFilters,
  selectTeachersFilters,
} from '@/redux/filters/selectors';
import { setFavoritesFilter, setFilters } from '@/redux/filters/slice';

const SelectField = ({
  label,
  name,
  options,
  register,
  errors,
  context = 'teachers',
  sxFormControl = {},
  sxSelect = {},
  showDollar = false,
}) => {
  const dispatch = useDispatch();
  const filters = useSelector(
    context === 'teachers' ? selectTeachersFilters : selectFavoritesFilters
  );
  const selectedValue = useMemo(() => filters[name] || '', [filters, name]);

  const handleChange = e => {
    const { value } = e.target;
    context === 'teachers'
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
        }}
        renderValue={selected => {
          const option = options.find(o => o.value === selected);
          return option ? (
            <span style={{ fontSize: '18px', fontWeight: 500 }}>
              {option.label} {showDollar ? '$' : ''}
            </span>
          ) : (
            <span style={{ color: '#999' }}>{label}</span>
          );
        }}
        MenuProps={{
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
