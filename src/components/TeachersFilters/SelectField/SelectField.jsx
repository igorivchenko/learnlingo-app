import React, { useState } from 'react';
import { FormControl, Select, MenuItem, FormHelperText } from '@mui/material';
import CustomSelectIcon from './CustomSelectIcon';

const SelectField = ({
  label,
  name,
  options,
  register,
  errors,
  sxFormControl = {},
  sxSelect = {},
  defaultValue = options.length > 0 ? options[0].value : '',
  showDollar = false,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = event => {
    setSelectedValue(event.target.value);
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
        defaultValue={defaultValue}
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
