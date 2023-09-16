"use client";

import { getRandomColorCode } from "@/lib/utils";

interface AvatarProps {
  label: string;
  defaultColor?: string;
}

export const Avatar = ({ label, defaultColor }: AvatarProps) => {
  const color = defaultColor || getRandomColorCode();

  return (
    <div
      className="h-8 w-8 text-white font-semibold  rounded-full flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {label}
    </div>
  );
};
