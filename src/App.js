import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/header/Header';
import TaskManager from './pages/taskManager/TaskManager';
import WeatherApp from './pages/weatherApp/WeatherApp';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: 8,
          marginBottom: 8,
          '&.MuiInputBase-input': {
            color: 'white'
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#00aeef',
              backgroundColor: '#333',
              'z-index': -1,
              boxShadow: '0 0 4px #00aeef'
            },
            '&:hover fieldset': {
              borderColor: '#00aeef',
            },
            '&.Mui-focused fieldset': {
              boxShadow: '0 0 20px #ef4100',
              borderColor: '#ef4100',
            },
            '& input': {
              color: 'white',
            },
            '& label': {
              color: 'white !important',
            },
            '&:focused label': {
              color: 'white',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white'
          },
        },
      },
    },
  }
});

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  
  return (    
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
          <Router>
            <div className="App">
              <Header onClick={toggleForm} />
              <Routes>
                <Route path="/taskManager" element={<TaskManager isFormOpen={isFormOpen} onClose={toggleForm}/>} />
                <Route path="/weatherApp" element={<WeatherApp />} />
                <Route path="/" element={<Navigate replace to="/taskManager" />} />
              </Routes>
            </div>
          </Router>
      </DndProvider>
    </ThemeProvider>  
  );
}

export default App;
