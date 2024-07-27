import { clsx } from "clsx";
import { atom } from "jotai";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// atoms

export const pageAtom = atom(0);
export const scrollYAtom = atom(0);
export const innerHeightAtom = atom(0);
