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
    if (!result.destination || result.source.index === result.destination.index)
      return;

    const updatedClasses = reorder(
      draggedClasses,
      result.source.index,
      result.destination.index
    );
    console.log(updatedClasses);
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
                {(provided) => (
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
