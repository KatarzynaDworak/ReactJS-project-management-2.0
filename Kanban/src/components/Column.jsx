import React, { useState } from 'react';
import SelectColumn from './SelectColumn';

export default function Column({ column, updateColumns }) {
  const [taskName, setTaskName] = useState("");
  const [taskUser, setTaskUser] = useState('');
  const taskLimit = 5;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (column.tasks.length >= taskLimit) {
      alert(`Limit zadań w kolumnie ${column.name} został osiągnięty!`);
      setTaskName('');
      setTaskUser('');
      return; 
    }


    const columns = JSON.parse(window.localStorage.getItem('kanban-board'));
    console.log(columns);
    const idColumn = column.id;

    const newTask = {
      id: Date.now(),
      name: taskName,
      user: taskUser,
    };

    const newColumns = columns.map((col) => {
      if (col.id === idColumn || col.limit < 5) {
        return {
          ...col,
          tasks: [...col.tasks, newTask],
        };
      }
      return col;
    });

    window.localStorage.setItem('kanban-board', JSON.stringify(newColumns));
    updateColumns(newColumns);
    setTaskName('');
    setTaskUser('');
  };

  const deleteTask = (taskId) => {
    const columns = JSON.parse(window.localStorage.getItem('kanban-board'));
    const idColumn = column.id;

    const newColumns = columns.map((col) => {
      if (col.id === idColumn) {
        return {
          ...col,
          tasks: col.tasks.filter((task) => task.id !== taskId),
        };
      }
      return col;
    });

    window.localStorage.setItem('kanban-board', JSON.stringify(newColumns));
    updateColumns(newColumns);
  };

  return (
    <div className="column">
      <h2>{column.name}</h2>
      <ul className="task-list">
        {column.tasks.map((task, index) => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{index + 1} {task.name} - {task.user}</span>
            <SelectColumn></SelectColumn>
            <button 
              onClick={() => deleteTask(task.id)} 
              style={{
                backgroundColor: '#DC143C',
                color: 'white',
                border: 'none',
                borderRadius: '2px',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                marginLeft: '10px'
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <form className="add-task-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Add new task..." 
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Add user..." 
          value={taskUser}
          onChange={(e) => setTaskUser(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
