import React from 'react'
import { useLocalStorage } from '../hooks/useStorage';

export default function SelectColumn() {
    const [columns] = useLocalStorage("kanban-board", [])
    console.log(columns);

    const handleColumnChange = (e, taskId, colId) => {
        const targetColumn = e.target.value;
        columnChange(taskId, targetColumn);
    }

  return (
    <div>
      {<select onChange={(e) => handleColumnChange(e, task.id, col.id)}>
            {columns.map(col => (
                <option key={col.id} value={col.id}>{col.name}</option>
            ))}
        </select>}
    </div>
  )
}
