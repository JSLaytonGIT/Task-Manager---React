import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const dialogStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '12px',
  border: '1px solid #00aeef',
};

const textContainerStyle = {
  textAlign: 'center',
  paddingBottom: '12px',
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  color: 'red',
  marginRight: '4px',
  position: 'relative',
  top: '6px',
  transform: 'scale(1.2)',
};

const DeleteConfirmationDialog = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onCancel}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
      PaperProps={{ style: dialogStyle }}
    >
      <DialogContent style={textContainerStyle}>
        <DialogContentText>
          <HighlightOffIcon style={iconStyle} /> Are you sure you want to delete this task?
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center' }}>
        <Button onClick={onConfirm} color="primary" variant='outlined'>
          Yes
        </Button>
        <Button onClick={onCancel} color="primary" variant='outlined'>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
