import Column from "./Column";
import { useLocalStorage } from "../hooks/useStorage";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const INITIAL_KANBAN_BOARD = [
  {
    id: '1',
    name: "To do",
    tasks: [
      { id: '1', name: "Task 1", user: "Agnieszka" },
      { id: '2', name: "Task 2", user: "Aneta" },
    ],
  },
  {
    id: '2',
    name: "In progress",
    tasks: [{ id: '3', name: "Task 3", user: "Marta" }],
  },
  {
    id: '3',
    name: "Done",
    tasks: [{ id: '4', name: "Task 4", user: "Anna" }],
  },
];

export default function Board() {
  const [columns, setColumns] = useLocalStorage("kanban-board", INITIAL_KANBAN_BOARD);

  const updateColumns = (newColumns) => {
    setColumns(newColumns);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const startColumn = columns.find((col) => col.id === source.droppableId);
    const finishColumn = columns.find((col) => col.id === destination.droppableId);

    if (startColumn === finishColumn) {
      const newTaskList = Array.from(startColumn.tasks);
      const [movedTask] = newTaskList.splice(source.index, 1);
      newTaskList.splice(destination.index, 0, movedTask);

      const newColumn = {
        ...startColumn,
        tasks: newTaskList,
      };

      const newColumns = columns.map((col) => (col.id === newColumn.id ? newColumn : col));
      setColumns(newColumns);
      return;
    }

    const startTaskList = Array.from(startColumn.tasks);
    const [movedTask] = startTaskList.splice(source.index, 1);
    const finishTaskList = Array.from(finishColumn.tasks);
    finishTaskList.splice(destination.index, 0, movedTask);

    const newStartColumn = {
      ...startColumn,
      tasks: startTaskList,
    };

    const newFinishColumn = {
      ...finishColumn,
      tasks: finishTaskList,
    };

    const newColumns = columns.map((col) => {
      if (col.id === newStartColumn.id) return newStartColumn;
      if (col.id === newFinishColumn.id) return newFinishColumn;
      return col;
    });

    setColumns(newColumns);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="p-8 bg-gradient-to-r from-blue-100 to-purple-100 font-sans min-h-screen">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-700">Kanban Board</h1>
        <div className="flex justify-evenly gap-2">
          {columns.map((column) => (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs border border-gray-300"
                >
                  <Column column={column} updateColumns={updateColumns} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}
