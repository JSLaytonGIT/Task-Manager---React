import React, {useState, useEffect} from "react";
import TaskList from "../../components/taskList/TaskList";
import AddTaskForm from "../../components/addTaskForm/AddTaskForm";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import mockTasks from "./mockTasks";
import { useDrop } from 'react-dnd';
import { Modal } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import "./TaskManager.css";

const TaskManager = ({ isFormOpen, onClose }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    const taskWithId = { ...newTask, id: uuidv4() };
    setTasks([...tasks, taskWithId]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  
  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  const handleTaskDrop = (status) => (item) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === item.task.id) {
        return { ...task, status };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const [, notStartedDrop] = useDrop({
    accept: 'TASK_ITEM',
    drop: handleTaskDrop('notStarted'),
  });

  const [, inProgressDrop] = useDrop({
    accept: 'TASK_ITEM',
    drop: handleTaskDrop('inProgress'),
  });

  const [, finishedDrop] = useDrop({
    accept: 'TASK_ITEM',
    drop: handleTaskDrop('finished'),
  });

  // const [, shelvedDrop] = useDrop({
  //   accept: 'TASK_ITEM',
  //   drop: handleTaskDrop('shelved'),
  // });

  return (
    <div className="task-manager">
      <div className="task-manager-container">
        <Modal open={isFormOpen} onClose={onClose}>
          <AddTaskForm onAddTask={handleAddTask} onClose={onClose} />
        </Modal>
        <div className="task-columns">
          <div className="task-column not-started" ref={notStartedDrop}>
            <span className="column-header">
              <AccountTreeIcon className="icon" style={{'color': 'red'}} />
              Not Started
            </span>
            <TaskList
              tasks={tasks.filter((task) => task.status === "notStarted")}
              onDeleteTask={handleDeleteTask}
            />
          </div>
          <div className="task-column in-progress" ref={inProgressDrop}>
            <span className="column-header">
              <DoubleArrowIcon className="icon" style={{'color': 'yellow'}} />
              In Progress
            </span>
            <TaskList
              tasks={tasks.filter((task) => task.status === "inProgress")}
              onDeleteTask={handleDeleteTask}
            />
          </div>
          <div className="task-column finished" ref={finishedDrop}>
            <span className="column-header">
              <ThumbUpOffAltIcon className="icon" style={{'color': '#00dc00'}} />
              Finished
            </span>
            <TaskList
              tasks={tasks.filter((task) => task.status === "finished")}
              onDeleteTask={handleDeleteTask}
            />
          </div>
          {/* <div className="task-column shelved" ref={shelvedDrop}>
            <h2 className="column-header">
              <PauseIcon className="icon" />
              Shelved
            </h2>
            <TaskList
              tasks={tasks.filter((task) => task.status === "shelved")}
              onDeleteTask={handleDeleteTask}
            />
          </div> */}
        </div>
        <div className="text-below-container">
          <strong>Task borders -</strong>
          <p className="green"><FiberManualRecordIcon style={{ position: "relative", top: "6.5px"}} /> &nbsp;low priority</p>
          <p className="orange"><FiberManualRecordIcon style={{ position: "relative", top: "6.5px"}} /> &nbsp;medium priority</p>
          <p className="red"><FiberManualRecordIcon style={{ position: "relative", top: "6.5px"}} /> &nbsp;high priority</p>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
