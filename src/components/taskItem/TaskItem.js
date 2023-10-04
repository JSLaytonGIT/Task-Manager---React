import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import { useDrag } from 'react-dnd';

const TaskItem = ({ task, onDelete }) => {
  const [showMore, setShowMore] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    onDelete(task.id);
    setIsDeleteDialogOpen(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  
  const totalMinutes = task.duration;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedDuration = totalMinutes >= 1440 ? '24h+' : (totalMinutes > 0 ? `${hours}h ${minutes}m` : '');

  const taskPriorityClass = {
    high: 'high-priority',
    medium: 'medium-priority',
    low: 'low-priority',
  }[task.priority];

  const descriptionWithHyphen = `- ${task.description}`;

  const formattedDeadline = task.completionBy
    ? new Date(task.completionBy).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
    : '';

  const deadlineDate = task.completionBy ? new Date(task.completionBy) : null;
  const currentTime = new Date();
  const timeDifferenceHours = deadlineDate
    ? Math.floor((deadlineDate - currentTime) / (1000 * 60 * 60))
    : 0;

  const item = {
    type: 'TASK_ITEM',
    task,
  };
  
  const [, ref] = useDrag({
    type: item.type,
    item,
  });
  

  return (
    <div className={`task-item ${taskPriorityClass}`} ref={ref}>
      <div className="task-header">
        <div className="task-title">
          <strong>{task.title}</strong>
        </div>
        {formattedDuration && (
          <div className="task-duration" data-tooltip="Estimated duration of task">
            <strong>{formattedDuration}</strong>
          </div>
        )}
      </div>
      <div className="task-description">
        {showMore ? (
          <>
            {descriptionWithHyphen}
            <span className="read-more-link" onClick={toggleShowMore}>
              Read Less
            </span>
          </>
        ) : (
          <>
            {descriptionWithHyphen.slice(0, 100)}
            {descriptionWithHyphen.length > 100 && (
              <>
                <span className="read-more-link" onClick={toggleShowMore}>
                  Read More
                </span>
              </>
            )}
          </>
        )}
      </div>
      {formattedDeadline && (
        timeDifferenceHours < 24 && timeDifferenceHours > 0 ? (
          <div className="task-deadline flashing" data-tooltip="Less than 24 hours until deadline">
            Deadline - {formattedDeadline}
          </div>
        ) : (
          <div className="task-deadline">
            Deadline - {formattedDeadline}
          </div>
        )
      )}
      
        <button
          className="delete-button"
          data-tooltip="Delete Task"
          onClick={handleDeleteClick}
        >
          <div className="delete-button-scale">
            <CloseIcon />
          </div>
        </button>
      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default TaskItem;
