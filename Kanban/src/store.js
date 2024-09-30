import { create } from "zustand";

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

// Store Zustand dla zarządzania tablicą kanban
export const useKanbanStore = create((set) => ({
  columns: JSON.parse(localStorage.getItem('kanban-board')) || INITIAL_KANBAN_BOARD,
  
  updateColumns: (newColumns) => {
    localStorage.setItem('kanban-board', JSON.stringify(newColumns));
    set({ columns: newColumns });
  },
  
  addTask: (columnId, task) => {
    set((state) => {
      const newColumns = state.columns.map((col) => {
        if (col.id === columnId) {
          return { ...col, tasks: [...col.tasks, task] };
        }
        return col;
      });
      localStorage.setItem('kanban-board', JSON.stringify(newColumns));
      return { columns: newColumns };
    });
  },
  
  deleteTask: (columnId, taskId) => {
    set((state) => {
      const newColumns = state.columns.map((col) => {
        if (col.id === columnId) {
          return {
            ...col,
            tasks: col.tasks.filter((task) => task.id !== taskId),
          };
        }
        return col;
      });
      localStorage.setItem('kanban-board', JSON.stringify(newColumns));
      return { columns: newColumns };
    });
  },
  
  onDragEnd: (result) => {
    set((state) => {
      const { destination, source, draggableId } = result;

      if (!destination) return;

      if (destination.droppableId === source.droppableId && destination.index === source.index) return;

      const startColumn = state.columns.find((col) => col.id === source.droppableId);
      const finishColumn = state.columns.find((col) => col.id === destination.droppableId);

      if (startColumn === finishColumn) {
        const newTaskList = Array.from(startColumn.tasks);
        const [movedTask] = newTaskList.splice(source.index, 1);
        newTaskList.splice(destination.index, 0, movedTask);

        const newColumn = {
          ...startColumn,
          tasks: newTaskList,
        };

        const newColumns = state.columns.map((col) => (col.id === newColumn.id ? newColumn : col));
        localStorage.setItem('kanban-board', JSON.stringify(newColumns));
        return { columns: newColumns };
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

      const newColumns = state.columns.map((col) => {
        if (col.id === newStartColumn.id) return newStartColumn;
        if (col.id === newFinishColumn.id) return newFinishColumn;
        return col;
      });

      localStorage.setItem('kanban-board', JSON.stringify(newColumns));
      return { columns: newColumns };
    });
  },
}));
