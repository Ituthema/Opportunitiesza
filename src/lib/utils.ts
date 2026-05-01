import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, differenceInDays } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDaysUntil(dateStr: string) {
  return differenceInDays(new Date(dateStr), new Date());
}

export function formatDate(dateStr: string) {
  return format(new Date(dateStr), "d MMMM yyyy");
}

export function getUrgencyClass(days: number) {
  if (days < 0) return "text-gray-500 line-through";
  if (days <= 3) return "text-sa-red font-semibold";
  if (days <= 7) return "text-sa-amber font-semibold";
  return "text-gray-500";
}
