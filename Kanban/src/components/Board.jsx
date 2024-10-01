import Column from "./Column";
import { useKanbanStore } from "../store";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default function Board() {
  const columns = useKanbanStore((store) => store.columns);
  const onDragEnd = useKanbanStore((store) => store.onDragEnd);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="p-8 bg-gradient-to-r from-blue-100 to-purple-100 font-sans min-h-screen">
        <div className="flex justify-evenly gap-2">
          {columns.map((column) => (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs border border-gray-300"
                >
                  <Column column={column} />
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
