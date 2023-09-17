import { Copy, Link2, MoreVertical, RotateCcw, XSquare } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ClassCodeDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-12 w-12 rounded-full hover:bg-gray-100 transition flex items-center justify-center">
          <MoreVertical className="h-[22px] w-[22px]" stroke="#212121" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-2xl font-medium w-[240px] px-0 py-2">
        <DropdownMenuItem className="py-[14px] px-4 flex items-center cursor-pointer ">
          <Link2 className="h-5 w-5 mr-8" />
          <p>Copy class invite link</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-[14px] px-4 flex items-center cursor-pointer ">
          <Copy className="h-5 w-5 mr-8" />
          <p>Copy paste code</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-[14px] px-4 flex items-center cursor-pointer ">
          <RotateCcw className="h-5 w-5 mr-8" />
          <p>Reset class code</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-[14px] px-4 flex items-center cursor-pointer ">
          <XSquare className="h-5 w-5 mr-8" />
          <p>Turn off</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
