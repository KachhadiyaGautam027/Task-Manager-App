// frontend/src/App.js
import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
      <Notifications />
    </div>
  );
};

export default App;
