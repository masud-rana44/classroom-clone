"use client";

import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

import { Avatar } from "@/components/avatar";
import { cn } from "@/lib/utils";

interface NavItemProps {
  label: string;
  href?: string;
  Icon?: LucideIcon;
  secondaryLabel?: string | null;
  color?: string;
}

export const NavItem = ({
  label,
  Icon,
  secondaryLabel,
  href,
  color,
}: NavItemProps) => {
  const pathname = usePathname();

  if (!href) {
    return (
      <div
        className={cn(
          "flex gap-8 w-full pl-6 py-[10px] hover:bg-zinc-100/80 transition rounded-r-full text-[14px] font-semibold items-center cursor-pointer",
          pathname === href && "bg-sky-100/80 hover:bg-sky-100/80",
          !Icon && "py-[6px] pl-[22px] gap-7"
        )}
      >
        {Icon ? (
          <Icon className="h-5 w-5" />
        ) : (
          <Avatar label={label[0]} defaultColor={color} />
        )}
        <div className="flex flex-col justify-center">
          <p className="truncate overflow-ellipsis overflow-hidden text-[#3c4043]">
            {label}
          </p>
          <p className="text-[13px] text-[#5f6368] font-medium">
            {secondaryLabel && secondaryLabel}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "flex gap-8 w-full pl-6 pr-4 py-[10px] hover:bg-zinc-100/80 transition rounded-r-full text-[14px] font-semibold items-center cursor-pointer",
        pathname === href && "bg-sky-100/80 hover:bg-sky-100/80",
        !Icon && "py-[6px] pl-[18px] gap-7"
      )}
    >
      {Icon ? (
        <Icon className="h-5 w-5" />
      ) : (
        <Avatar label={label[0]} defaultColor={color} />
      )}
      <div className="flex flex-col justify-center max-w-[191px]">
        <p className="truncate text-ellipsis overflow-hidden text-[#3c4043] ">
          {label}
        </p>
        <p className="truncate text-ellipsis overflow-hidden text-[13px] text-[#5f6368] font-medium">
          {secondaryLabel && secondaryLabel}
        </p>
      </div>
    </Link>
  );
};
