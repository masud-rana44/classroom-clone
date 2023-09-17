"use client";

import { Maximize } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ClassCodeDropdown } from "@/components/dropdown/classcode-dropdown";
import { ClassWithMembersWithProfile } from "@/types";
import { useModal } from "@/hooks/use-modal-store";

interface ClassCodeProps {
  data: ClassWithMembersWithProfile;
}

export const Upcoming = ({ data }: ClassCodeProps) => {
  const { classCode: code, defaultColor } = data;

  const { onOpen } = useModal();

  return (
    <div className="relative px-4 py-6 rounded-md border border-[#dadce0] flex flex-col -space-y-2">
      <p className=" font-semibold text-[14px] text-muted-foreground text-[#3e4245] mb-6">
        Upcoming
      </p>
      <div className="mb-10">
        <p className="text-sm text-gray-400 mb-8">No work due soon</p>
      </div>
      <button
        style={{ color: defaultColor }}
        className="absolute bottom-2 right-2 text-sm font-semibold px-2 py-2 rounded-sm hover:bg-gray-100 transition"
      >
        View all
      </button>
    </div>
  );
};
