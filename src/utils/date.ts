import { parseISO } from "date-fns";
import { format, utcToZonedTime } from "date-fns-tz";

export const addDaysToDate = (days: number, date = new Date()) => {
  date.setDate(date.getDate() + days);
  return date;
};

export const addMinutesToDate = (date: string, minutesToAdd: number) => {
  const newDate = new Date(date);
  newDate.setTime(newDate.getTime() + minutesToAdd * 60000); // 1 minute = 60,000 milliseconds
  return formatInTimeZone(newDate.toISOString(), "p");
};

export const formatTime = (date: string) => {
  const formattedDate = formatInTimeZone(date, "p");
  return formattedDate;
};

export const formatDate = (date: string) => {
  const formattedDate = formatInTimeZone(date, "PP");
  return formattedDate;
};

const formatInTimeZone = (date: string, fmt: string, tz: string = "UTC") => {
  const parsedTime = parseISO(date);
  return format(utcToZonedTime(parsedTime, tz), fmt, { timeZone: tz });
};
