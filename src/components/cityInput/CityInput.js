import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button, TextField, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

function CityInput({ onCityChange }) {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedOption, setHighlightedOption] = useState(null);
  const [enterPressed, setEnterPressed] = useState(false);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    const newCity = city;
    if (newCity.trim() === '') {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

    axios
      .get(`https://api.openweathermap.org/data/2.5/find?q=${city}&type=like&appid=${apiKey}`)
      .then((response) => {
        const options = response.data.list.map((item) => ({
          label: `${item.name}, ${item.sys.country}`,
        }));
        setSuggestions(options);
      })
      .catch(() => {
        setSuggestions([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [city]);

  const handleSearch = useCallback(() => {
    console.log(city);
    onCityChange(city);
  }, [city, onCityChange]);

  useEffect(() => {
    if (enterPressed) {
      handleSearch();
      setEnterPressed(false);
    }
  }, [enterPressed, handleSearch]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedOption) {
        const selectedCity = highlightedOption.label;
        setCity(selectedCity);
        setEnterPressed(true);
      } else if (suggestions.length > 0) {
        const firstOption = suggestions[0].label;
        setCity(firstOption);
        setEnterPressed(true);
      }
    }
  };
  

  const textFieldStyles = {
    '& label.Mui-focused': {
      color: 'white !important',
    },
    '& .MuiInputLabel-root': {
      color: 'white !important',
    },
    '& .MuiInputAdornment-root.MuiIconButton-root': {
      color: 'white !important',
    },
    '& input': {
      color: 'white !important',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white !important',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white !important',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white !important',
      },
      '&:hover fieldset': {
        borderColor: 'white !important',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'yellow !important',
      },
      '& input': {
        color: 'white !important',
      },
      '& .MuiInputLabel-root': {
        color: 'white',
      },
    },
    color: 'white',
    width: '400px',
    marginRight: '30px',
  };

  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ marginTop: '30px' }}>
        <Autocomplete
          ref={autocompleteRef}
          options={suggestions}
          freeSolo
          inputValue={city}
          onInputChange={(event, newInputValue) => setCity(newInputValue)}
          onHighlightChange={(event, option) => {
            setHighlightedOption(option);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter City"
              variant="standard"
              sx={textFieldStyles}
              onKeyDown={handleKeyPress}
            />
          )}
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          disabled={isLoading}
          sx={{ backgroundColor: '#ef4100', color: 'white', marginTop: '8px', '&:hover': { backgroundColor: 'transparent' }}}
        >
          Search
        </Button>
      </Box>
    </div>
  );
}

export default CityInput;
