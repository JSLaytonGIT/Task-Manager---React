import React from 'react';
import TaskItem from '../taskItem/TaskItem';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </div>
  );
};

export default TaskList;