import { Maximize } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ClassCodeDropdown } from "@/components/classcode/classcode-dropdown";
import { ClassWithMembersWithProfile } from "@/types";
import { useModal } from "@/hooks/use-modal-store";

interface ClassCodeProps {
  data: ClassWithMembersWithProfile;
}

function ClassCode({ data }: ClassCodeProps) {
  const { classCode: code, defaultColor } = data;

  const { onOpen } = useModal();

  return (
    <div className="pl-4 pr-1 pt-1 pb-2 rounded-md border border-[#dadce0] flex flex-col -space-y-2">
      <div className="flex items-center justify-between">
        <p className=" font-semibold text-[14px] text-muted-foreground text-[#3e4245">
          Class code
        </p>
        <ClassCodeDropdown />
      </div>
      <div className="flex items-center">
        <p
          className="text-2xl font-medium leading-8"
          style={{ color: defaultColor }}
        >
          {code}
        </p>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button
                onClick={() => onOpen("classCode", { class: data })}
                className="h-12 w-12 rounded-full hover:bg-gray-100/70 transition flex items-center justify-center"
              >
                <Maximize
                  className="h-5 w-5 font-semibold"
                  stroke={defaultColor}
                  strokeWidth={3}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-gray-700 text-white">
              <p>Display</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

export default ClassCode;
