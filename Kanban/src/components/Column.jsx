import React, { useState } from 'react';
import SelectColumn from './SelectColumn';
import { Draggable } from 'react-beautiful-dnd';

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
    const idColumn = column.id;

    const newTask = {
      id: String(Date.now()),  
      name: taskName,
      user: taskUser,
    };

    const newColumns = columns.map((col) => {
      if (col.id === idColumn) {
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
          <Draggable key={task.id} draggableId={String(task.id)} index={index}>
            {(provided) => (
              <li
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps} // Dodane w odpowiednim miejscu
                style={{
                  ...provided.draggableProps.style,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px',
                  margin: '4px 0',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '4px',
                  cursor: 'pointer', // Dodaj kursor wskazujący na możliwość przeciągania
                }}
              >
                <span>{index + 1} {task.name} - {task.user}</span>
                {/* <SelectColumn /> */}
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
                    marginLeft: '10px',
                  }}
                >
                  X
                </button>
              </li>
            )}
          </Draggable>
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

