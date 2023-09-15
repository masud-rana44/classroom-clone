import { randomColors } from "@/data/avatar-color";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomColor() {
  const length = randomColors.length;
  const randomNumber = Math.floor(Math.random() * length);

  return randomColors[randomNumber];
}
