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
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#00aeef',
            },
            '&:hover fieldset': {
              borderColor: '#00aeef',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00aeef',
            },
            '& input': {
              color: '#00aeef',
            },
            '& label': {
              color: '#00aeef !important',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#00aeef'
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
          <Header onClick={toggleForm}/>
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
