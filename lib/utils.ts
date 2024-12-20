import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToId = (id: string) => {
  const ele = document.getElementById(id);
  ele?.scrollIntoView({ behavior: "smooth" });
};
