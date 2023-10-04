import React, { useState } from 'react';
import { Slider, Button } from '@mui/material';
import { styled } from "@mui/system";

const TimeSlider = ({name, onTimeChange}) => {
  const [time, setTime] = useState(0);
  const [sliderVisible, setSliderVisible] = useState(false);

  const handleTimeChange = (event, newValue) => {
    const snappedValue = Math.round(newValue / 5) * 5;
    setTime(snappedValue);
    onTimeChange(snappedValue);
  };

  const marks = [
    {
      value: 0,
      label: '0h',
    },
    {
      value: 360,
      label: '6h',
    },
    {
      value: 720,
      label: '12h',
    },
    {
      value: 1080,
      label: '18h',
    },
    {
      value: 1440,
      label: '24h',
    },
  ];

  const toggleSlider = () => {
    setSliderVisible(!sliderVisible);
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: sliderVisible ? 0: '8px',
    marginBottom: sliderVisible ? 0: '9px',
  };

  const sliderContainerStyle = {
    flex: 1,
    display: sliderVisible ? 'block' : 'none',
    marginLeft: '32px',
  };

  const valueLabelFormat = (value) => {
    if (value === 1440) {
      return '24 hours+';
    }
    return `${Math.floor(value / 60)} hours ${value % 60} minutes`;
  };

  const BlueButton = styled(Button)`
    border: 1px solid #00aeef;
    color: #00aeef;
  `;

  return (
    <div style={containerStyle}>
      <BlueButton onClick={toggleSlider} variant="outlined" sx={{boxShadow: '0 0 4px #00aeef', borderColor:'#00aeef', backgroundColor: '#333', color: 'white', '&:hover': {borderColor: '#ef4100', boxShadow: '0 0 20px #ef4100', backgroundColor: '#333'}}}>
        Duration
      </BlueButton>
      <div style={sliderContainerStyle}>
        <Slider
          name={name}
          value={time}
          onChange={handleTimeChange}
          aria-labelledby="time-slider"
          valueLabelDisplay="auto"
          step={5}
          min={0}
          max={1440}
          valueLabelFormat={valueLabelFormat}
          sx={{color: '#00aeef', marginTop: '9px', marginBottom: '9px'}}
        />
      </div>
    </div>
  );
}

export default TimeSlider;
