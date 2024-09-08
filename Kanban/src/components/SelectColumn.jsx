import React from 'react'
import { useLocalStorage } from '../hooks/useStorage';

export default function SelectColumn() {
    // const columns = JSON.parse(window.localStorage.getItem('kanban-board'));
    const [columns] = useLocalStorage("kanban-board", [])
    console.log(columns);

    const handleColumnChange = (e, taskId, colId) => {
        // const taskId = e.target.value; //JAK??
        const targetColumn = e.target.value; //JAK??
        columnChange(taskId, targetColumn);
    }

    const columnChange = (taskId, targetColumn) => {
        // JAK??
        // switch (num) {
        //   case num === 1:
    
        //   case num === 2:
    
        //   case num === 3:
    
      //   }
    
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
