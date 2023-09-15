"use client";

import { cn, getRandomColor } from "@/lib/utils";

interface AvatarProps {
  label: string;
}

export const Avatar = ({ label }: AvatarProps) => {
  const color = getRandomColor();

  return (
    <div
      className="h-8 w-8 text-white font-semibold  rounded-full flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {label}
    </div>
  );
};
