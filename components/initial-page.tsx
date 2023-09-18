"use client";

import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";

import { ClassCard } from "@/components/class-card";
import { ClassWithProfile } from "@/types";
import { useState } from "react";
import { reorder } from "@/lib/utils";

interface InitialPageProps {
  classes: ClassWithProfile[];
}

export const InitialPage = ({ classes }: InitialPageProps) => {
  const [draggedClasses, setDraggedClasses] = useState(classes);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const sourceIdx = result.source.index;
    const destinationIdx = result.destination.index;

    if (sourceIdx === destinationIdx) return;

    const updatedClasses = reorder(draggedClasses, sourceIdx, destinationIdx);

    setDraggedClasses(updatedClasses);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="class-list">
        {(provided) => (
          <main
            className="mr-12 p-6 flex flex-wrap gap-6"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {draggedClasses.map((cls, idx) => (
              <Draggable key={cls.id} draggableId={cls.id} index={idx}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ClassCard cls={cls} length={classes.length} />
                  </div>
                )}
              </Draggable>
            ))}
          </main>
        )}
      </Droppable>
    </DragDropContext>
  );
};
