import Column from "./Column";
import { useLocalStorage } from "../hooks/useStorage";
import './Board.css';

const INITIAL_KANBAN_BOARD = [
  {
    id: 1,
    name: "To do",
    tasks: [
      {
        id: 1,
        name: "Task 1",
      },
      {
        id: 2,
        name: "Task 2",
      },
    ],
  },
  {
    id: 2,
    name: "In progress",
    tasks: [
      {
        id: 3,
        name: "Task 3",
      },
    ],
  },
  {
    id: 3,
    name: "Done",
    tasks: [
      {
        id: 4,
        name: "Task 4",
      },
    ],
  },
];



export default function Board() {
    const [columns, setColumns, clearColumns] = useLocalStorage("kanban-board", INITIAL_KANBAN_BOARD);
    
  const updateColumns = (newColumns) => {
    setColumns(newColumns);
  };

    return (
    <div className="board">
      <h1>Kanban</h1>
      <div className="board-columns">
        {columns.map((column) => (
          <Column key={column.id} column={column} updateColumns={updateColumns}/>
        ))}
      </div>
    </div>
  );
}
