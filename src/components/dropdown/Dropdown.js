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
        color: 'white',
        '.MuiSvgIcon-root ': {
          fill: "white !important",
        }
      }}}
      inputProps={{MenuProps: {MenuListProps: {sx: {backgroundColor: '#333'}}}}}
      InputLabelProps={{style: { color: '#fff' }}}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value} sx={{
          '&.Mui-selected': {
            color: 'white',
            backgroundColor: '#333',
          },
          color: 'white',
        }}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Dropdown;
