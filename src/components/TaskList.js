// frontend/src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    socket.on('taskUpdated', (updatedTask) => {
      setTasks(prevTasks => prevTasks.map(task => 
        task._id === updatedTask._id ? updatedTask : task
      ));
    });

    return () => socket.off('taskUpdated');
  }, []);

  return (
    <div>
      {/* Render tasks */}
    </div>
  );
};

export default TaskList;
