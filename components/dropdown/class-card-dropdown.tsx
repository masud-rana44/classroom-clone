"use client";

import { MoreVertical } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModal } from "@/hooks/use-modal-store";
import { Role } from "@prisma/client";
import { ClassWithProfile } from "@/types";

interface ClassCardDropdownProps {
  cls: ClassWithProfile;
  isInvited: boolean;
  length: number;
}

export const ClassCardDropdown = ({
  cls,
  isInvited,
  length,
}: ClassCardDropdownProps) => {
  const { onOpen } = useModal();
  const { members, name, section, subject, room } = cls;

  const role = members[0].role;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ring-0" asChild>
        <button className="h-11 w-11 mt-2 flex items-center justify-center hover:bg-gray-400/20 rounded-full">
          <MoreVertical />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-0 py-2 font-medium text-2xl rounded-md">
        {length > 1 && (
          <DropdownMenuItem
            onClick={() => {}}
            className="py-4 px-6 rounded-none cursor-pointer hover:bg-zinc-100"
          >
            Move
          </DropdownMenuItem>
        )}
        {role === Role.TEACHER && (
          <DropdownMenuItem
            onClick={() => {}}
            className="py-4 px-6  rounded-none cursor-pointer hover:bg-zinc-100"
          >
            Copy invite link
          </DropdownMenuItem>
        )}
        {role === Role.TEACHER && (
          <DropdownMenuItem
            onClick={() =>
              onOpen("editClass", {
                classInfo: {
                  name,
                  section: section || undefined,
                  subject: subject || undefined,
                  room: room || undefined,
                },
              })
            }
            className="py-4 px-6  rounded-none cursor-pointer hover:bg-zinc-100"
          >
            Edit
          </DropdownMenuItem>
        )}
        {role === Role.TEACHER && (
          <DropdownMenuItem
            onClick={() => {}}
            className="py-4 px-6  rounded-none cursor-pointer hover:bg-zinc-100"
          >
            Copy
          </DropdownMenuItem>
        )}
        {role === Role.TEACHER && (
          <DropdownMenuItem
            onClick={() => {}}
            className="py-4 px-6  rounded-none cursor-pointer hover:bg-zinc-100"
          >
            Archive
          </DropdownMenuItem>
        )}
        {role === Role.TEACHER && isInvited && (
          <DropdownMenuItem
            onClick={() => {}}
            className="py-4 px-6  rounded-none cursor-pointer hover:bg-zinc-100"
          >
            Leave class
          </DropdownMenuItem>
        )}
        {role === Role.STUDENT && (
          <DropdownMenuItem
            onClick={() => {}}
            className="py-4 px-6  rounded-none cursor-pointer hover:bg-zinc-100"
          >
            Unenroll
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
