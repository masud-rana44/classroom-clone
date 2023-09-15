"use client";

import { getRandomColorCode } from "@/lib/utils";

interface AvatarProps {
  label: string;
}

export const Avatar = ({ label }: AvatarProps) => {
  const color = getRandomColorCode();

  return (
    <div
      className="h-8 w-8 text-white font-semibold  rounded-full flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {label}
    </div>
  );
};
