"use client";

import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

import { Avatar } from "@/components/avatar";
import { cn } from "@/lib/utils";

interface NavItemProps {
  label: string;
  href: string;
  Icon?: LucideIcon;
  secondaryLabel?: string;
}

export const NavItem = ({
  label,
  Icon,
  secondaryLabel,
  href,
}: NavItemProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex gap-8 w-full pl-7 py-[10px] hover:bg-zinc-100/80 transition rounded-r-full text-[14px] font-medium items-center cursor-pointer",
        pathname === href && "bg-sky-100/80 hover:bg-sky-100/80",
        !Icon && "py-[6px] pl-[22px] gap-7"
      )}
    >
      {Icon ? <Icon className="h-5 w-5" /> : <Avatar label={label[0]} />}
      <div className="flex flex-col justify-center">
        <p>{label}</p>
        <p className="font-normal text-[13px] text-[#5f6368]">
          {secondaryLabel && secondaryLabel}
        </p>
      </div>
    </div>
  );
};
