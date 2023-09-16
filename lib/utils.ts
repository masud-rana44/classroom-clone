import { characters, imageUrls, randomColors } from "@/data/data";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/////////////////////////////////////

export function generateRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomColorCode() {
  const length = randomColors.length;

  return randomColors[generateRandomNumberBetween(0, length - 1)];
}

export function getRandomImageUrl() {
  const length = imageUrls.length;
  return imageUrls[generateRandomNumberBetween(0, length - 1)];
}

export function getRandomClassCode() {
  let code = "";
  const length = 7;

  for (let i = 0; i < length; i++) {
    const idx = generateRandomNumberBetween(0, 36);
    code += characters[idx];
  }

  return code;
}

export function isValidClassCode(classCode: string) {
  const regex = /^[A-Za-z0-9]{5,7}$/;
  return regex.test(classCode);
}
