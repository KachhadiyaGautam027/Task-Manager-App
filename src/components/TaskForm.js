import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: '#eceffc',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 60px',
  color: 'white',
  background: 'rgba(0, 0, 0, 0.8)',
  borderRadius: '10px',
  boxShadow: `0 0.4px 0.4px rgba(128, 128, 128, 0.109),
              0 1px 1px rgba(128, 128, 128, 0.155),
              0 2.1px 2.1px rgba(128, 128, 128, 0.195),
              0 4.4px 4.4px rgba(128, 128, 128, 0.241),
              0 12px 12px rgba(128, 128, 128, 0.35)`,
};

const inputStyle = {
  width: '100%',
  margin: '12px 0',
  padding: '12px',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '2px solid white',
  color: 'white',
  outline: 'none',
  fontSize: '16px',
};

const labelStyle = {
  display: 'block',
  color: 'white',
  marginBottom: '8px',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  margin: '18px 0 9px 0',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  outline: 'none',
  transition: '0.6s',
};

const buttonHoverStyle = {
  boxShadow: '0 0 20px 10px hsla(204, 70%, 53%, 0.5)',
};

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [deviceToken, setDeviceToken] = useState('');
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !assignedTo || !deviceToken) {
      setError('All fields are required.');
      return;
    }

    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/tasks/assign-task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, assignedTo, deviceToken }),
      });

      const result = await response.json();
      console.log(result);
      setTitle('');
      setAssignedTo('');
      setDeviceToken('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle} className="login-form">
        <h1>Assign Task</h1>

        <div className="form-input-material">
          <label htmlFor="title" style={labelStyle}>Task Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
            placeholder=" "
            autoComplete="off"
            required
          />
        </div>

        <div className="form-input-material">
          <label htmlFor="assignedTo" style={labelStyle}>Assign To</label>
          <input
            type="text"
            id="assignedTo"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            style={inputStyle}
            placeholder=" "
            autoComplete="off"
            required
          />
        </div>

        <div className="form-input-material">
          <label htmlFor="deviceToken" style={labelStyle}>Device Token</label>
          <input
            type="text"
            id="deviceToken"
            value={deviceToken}
            onChange={(e) => setDeviceToken(e.target.value)}
            style={inputStyle}
            placeholder=" "
            autoComplete="off"
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button
          type="submit"
          style={{ ...buttonStyle, ...(isHovered ? buttonHoverStyle : {}) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
