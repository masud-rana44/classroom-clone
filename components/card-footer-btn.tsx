import Link from "next/link";
import { LucideIcon } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CardFooterBtnProps {
  Icon: LucideIcon;
  label: string;
  href: string;
}

export const CardFooterBtn = ({ Icon, label, href }: CardFooterBtnProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className="h-12 w-12 my-1 flex items-center justify-center hover:bg-gray-100/70 rounded-full"
          >
            <Icon className="h-5 w-5" />
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="max-w-[200px] bg-[#000000d9] text-[13px] font-medium text-white/80 py-1 px-2"
        >
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
