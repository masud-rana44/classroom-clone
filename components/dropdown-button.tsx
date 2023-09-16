"use client";

import { Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModal } from "@/hooks/use-modal-store";

export const DropdownButton = () => {
  const { onOpen } = useModal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ring-0" asChild>
        <button className="h-11 w-11 hover:bg-zinc-100 rounded-full flex items-center justify-center p-2 transition ">
          <Plus />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-0 py-2 font-medium text-2xl rounded-md">
        <DropdownMenuItem
          onClick={() => onOpen("joinClass")}
          className="py-4 px-6 rounded-none cursor-pointer hover:bg-zinc-100"
        >
          Join Class
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onOpen("createClass")}
          className="py-4 px-6  rounded-none cursor-pointer hover:bg-zinc-100"
        >
          Create Class
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
