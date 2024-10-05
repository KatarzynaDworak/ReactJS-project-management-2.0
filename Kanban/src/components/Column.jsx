import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useAuthStore } from '../stores/auth';

export default function Column({ column }) {
  const [taskName, setTaskName] = useState("");
  const [taskUser, setTaskUser] = useState('');
  const addTask = useAuthStore((state) => state.addTask);
  const deleteTask = useAuthStore((state) => state.deleteTask);
  const taskLimit = 5;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (column.tasks.length >= taskLimit) {
      alert(`Limit zadań w kolumnie ${column.name} został osiągnięty!`);
      setTaskName('');
      setTaskUser('');
      return;
    }

    const newTask = {
      id: String(Date.now()),  
      name: taskName,
      user: taskUser,
    };

    addTask(column.id, newTask);
    setTaskName('');
    setTaskUser('');
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4 text-purple-600">{column.name}</h2>
      <ul className="space-y-4">
        {column.tasks.map((task, index) => (
          <Draggable key={task.id} draggableId={String(task.id)} index={index}>
            {(provided) => (
              <li
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="bg-blue-100 p-4 rounded-md flex justify-between items-center shadow-md transition-transform transform hover:scale-105"
              >
                <span>{index + 1} {task.name} - {task.user}</span>
                <button
                  onClick={() => deleteTask(column.id, task.id)}
                  className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  X
                </button>
              </li>
            )}
          </Draggable>
        ))}
      </ul>
      <form className="mt-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full mb-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="User"
          value={taskUser}
          onChange={(e) => setTaskUser(e.target.value)}
          className="w-full mb-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-md hover:from-green-500 hover:to-blue-600 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
