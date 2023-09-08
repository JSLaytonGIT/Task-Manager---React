import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Dropdown = ({ options = [], name, label = "Select an option", selectedOption, onOptionChange}) => {
  const handleChange = (event) => {
    onOptionChange(event.target.value);
  };
  
  return (
    <TextField
      select
      label={label}
      name={name}
      value={selectedOption}
      onChange={handleChange}
      variant="outlined"
      sx={{ width: "200px",
      '& .MuiInputBase-root': {
        color: '#00aeef',
      }}}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value} sx={{
          '&.Mui-selected': {
            color: '#00aeef',
          },
          color: '#00aeef'
        }}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Dropdown;
