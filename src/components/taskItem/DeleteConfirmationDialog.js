import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const dialogStyle = {
  backgroundColor: '#232323',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '12px',
  border: '1px solid #00aeef',
  borderColor: '#ef4100',
  boxShadow: '0 0 20px #ef4100',
};

const textContainerStyle = {
  textAlign: 'center',
  paddingBottom: '12px',
  display: 'flex',
  alignItems: 'center',
};

const DialogContentTextStyle = {
  color: 'white'
}

const iconStyle = {
  color: 'red',
  marginRight: '4px',
  position: 'relative',
  top: '6px',
  transform: 'scale(1.2)',
};

const DeleteConfirmationDialog = ({ isOpen, onCancel, onConfirm }) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleButtonEnter1 = () => {
    setIsHovered1(true);
  };

  const handleButtonEnter2 = () => {
    setIsHovered2(true);
  };

  const handleButtonLeave1 = () => {
    setIsHovered1(false);
  };

  const handleButtonLeave2 = () => {
    setIsHovered2(false);
  };

  const buttonStyle1 = {
    backgroundColor: '#333',
    marginRight: '10px',
    color: 'white',
    transform: isHovered1 ? 'scale(1.1)' : 'scale(1)',
    borderColor: isHovered1 ? '#00aeef' : '#00aeef',
    boxShadow: isHovered1 ? '0 0 20px #00aeef' : '',
  }

  const buttonStyle2 = {
    backgroundColor: '#333',
    marginLeft: '10px',
    color: 'white',
    transform: isHovered2 ? 'scale(1.1)' : 'scale(1)',
    borderColor: isHovered2 ? '#00aeef' : '#00aeef',
    boxShadow: isHovered2 ? '0 0 20px #00aeef' : '',
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onCancel}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
      PaperProps={{ style: dialogStyle }}
    >
      <DialogContent style={textContainerStyle}>
        <DialogContentText style={DialogContentTextStyle}>
          <HighlightOffIcon style={iconStyle} /> Are you sure you want to delete this task?
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center' }}>
        <Button onClick={onConfirm} color="primary" variant='outlined' style={buttonStyle1} onMouseEnter={handleButtonEnter1} onMouseLeave={handleButtonLeave1}>
          Yes
        </Button>
        <Button onClick={onCancel} color="primary" variant='outlined' style={buttonStyle2} onMouseEnter={handleButtonEnter2} onMouseLeave={handleButtonLeave2}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
