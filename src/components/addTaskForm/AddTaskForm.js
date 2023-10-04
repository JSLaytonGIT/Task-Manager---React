import React, { useState } from 'react';
import { Button, Box, TextField, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { modalstyle, buttonBox, closeButton, outerButtonBox, title } from './AddTaskForm.Modal.styles';
import Dropdown from '../dropdown/Dropdown';
import TimeSlider from '../TimeSlider/TimeSlider';

const AddTaskForm = ({ onAddTask, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    duration: '',
    completionBy: '',
    status: 'notStarted',
  });
  const [formErrors, setFormErrors] = useState({
    title: '',
  });
  

  const priorityOptions = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ]

  const statusOptions = [
    { label: "Not started", value: "notStarted" },
    { label: "In progress", value: "inProgress" },
    { label: "Finished", value: "finished" },
  ]

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'title') {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          title: value.trim() === '' ? 'Title is required' : '',
        }));
    }
  };

  const handleAdd = () => {
      onAddTask(formData);
  };

  const handleSubmit = e => {
    console.log("Form Values");
    console.log(formData);
    e.preventDefault();

    if (formData.title.trim() === '') {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          title: 'Title is required',
        }));
        return;
    }

    handleAdd();

    setTimeout(() => {onClose()}, 100);
  };

  const handleFormDataChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
            <Box sx={modalstyle}>
                <Box sx={closeButton}>
                    <IconButton onClick={onClose} sx={{color: '#ef4100'}}>
                          <CloseIcon />
                    </IconButton>
                </Box>
                <Typography sx={title}>Add Task</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        error={!!formErrors.title}
                        helperText={formErrors.title}
                        InputLabelProps={{style: { color: '#fff' }}}
                    />
                    <TextField
                        label="Description"
                        name="description"
                        multiline
                        value={formData.description}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        sx={{
                            '& .MuiInputBase-root': {
                            color: 'white',
                        }}}
                        InputLabelProps={{style: { color: '#fff' }}}
                    />
                    <Dropdown
                        name="priority"
                        options={priorityOptions}
                        width="200px"
                        label="Priority"
                        selectedOption={formData.priority}
                        onOptionChange={(selectedValue) => handleFormDataChange('priority', selectedValue)}
                    />
                    <TimeSlider name="duration" value={formData.duration} onTimeChange={(value) => handleFormDataChange('duration', value)} />
                    <TextField
                        label="Deadline"
                        name="completionBy"
                        type="datetime-local"
                        inputProps={{
                            min: new Date().toISOString().slice(0, 16),
                        }}
                        value={formData.completionBy}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{shrink: true}}
                        sx={{colorScheme: 'dark'}}
                    />
                    <Dropdown
                        name="status"
                        options={statusOptions}
                        width="200px"
                        label="Status"
                        selectedOption={formData.status}
                        onOptionChange={(selectedValue) => handleFormDataChange('status', selectedValue)}
                    />
                    <Box sx={outerButtonBox}>
                        <Button sx={buttonBox} type="submit" variant="contained">
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
  );
};

export default AddTaskForm;
