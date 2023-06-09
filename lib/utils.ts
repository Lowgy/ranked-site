import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function eloColor(elo: number) {
  return elo > 0 && elo < 599
    ? "text-gray-950"
    : elo > 600 && elo < 1199
    ? "text-gray-500"
    : elo > 1200 && elo < 1799
    ? "text-yellow-500"
    : elo > 1800
    ? "text-blue-400"
    : ""
}

export function addRank(elo: number) {
  return elo > 0 && elo < 199
    ? "Coal I"
    : elo > 200 && elo < 399
    ? "Coal II"
    : elo > 400 && elo < 599
    ? "Coal III"
    : elo > 600 && elo < 799
    ? "Iron I"
    : elo > 800 && elo < 999
    ? "Iron II"
    : elo > 1000 && elo < 1199
    ? "Iron III"
    : elo > 1200 && elo < 1399
    ? "Gold I"
    : elo > 1400 && elo < 1599
    ? "Gold II"
    : elo > 1600 && elo < 1799
    ? "Gold III"
    : elo > 1800 && elo < 1999
    ? "Diamond I"
    : elo > 2000 && elo < 2199
    ? "Diamond II"
    : elo > 2200 && elo < 2399
    ? "Diamond III"
    : ""
}

export function timeFormat(time: number) {
  const runTime = new Date(time)
  return runTime.toISOString().substr(14, 8)
}
