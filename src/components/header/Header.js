import React from 'react';
import { Button } from '@mui/material';
import './Header.css';

const Header = ({ currentPage, onClick }) => {
  return (
    <header className="header">
      <div className="left">
      <div className="title">Task Manager</div>
      </div>
      <div className="center">
        {currentPage === 'taskManager' ? (
          <Button onClick={onClick} sx={{ color: 'white', backgroundColor: '#ef4100', transition: 'background-color 0.8s' }}>
            Add Task
          </Button>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
