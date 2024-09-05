import { Experience } from "@prisma/client";
import { differenceInCalendarMonths, format } from "date-fns";
import { ru } from "date-fns/locale";

export const getDeclination = (value: number, declination: string[]): string => {
  const cases = [2, 0, 1, 1, 1, 2];

  return (
    declination[
      value % 100 > 4 && value % 100 < 20 ? 2 : (cases[value % 10 < 5 ? value % 10 : 5] ?? 0)
    ] ?? ""
  );
};

export const formatDate = (date?: Date): string | undefined => {
  if (!date) return undefined;

  return format(date, "LLLL yyyy", { locale: ru });
};

export const getMonthsDifference = (start: Date, end?: Date): number => {
  const difference = differenceInCalendarMonths(end ?? new Date(), start);

  return difference + 1;
};

const formatWorkTime = (years: number, months: number): string => {
  const yearsString = years > 0 ? `${years} ${getDeclination(years, ["год", "года", "лет"])}` : "";
  const monthsString =
    months > 0 ? `${months} ${getDeclination(months, ["месяц", "месяца", "месяцев"])}` : "";

  return [yearsString, monthsString].filter(Boolean).join(" ");
};

export const getWorkTime = (start: Date, end?: Date): string => {
  const months = getMonthsDifference(start, end);

  const years = Math.floor(months / 12);
  const actualMonths = months % 12;

  return formatWorkTime(years, actualMonths);
};

export const getTotalWorkTime = (experiences: Experience[]): string => {
  let prevInterval: Pick<Experience, "start" | "end"> | null = null;

  const months = experiences
    .map(({ start, end }) => {
      const currentMonths = getMonthsDifference(start, end ?? undefined);

      if (!prevInterval) {
        prevInterval = { start, end };

        return currentMonths;
      }

      const actualEnd = prevInterval.end ?? new Date();

      if (start <= actualEnd) {
        const intersection = getMonthsDifference(actualEnd, start);

        return currentMonths - intersection;
      }

      return 0;
    })
    .reduce((acc, val) => acc + val, 0);

  const years = Math.floor(months / 12);
  const actualMonths = months % 12;

  return formatWorkTime(years, actualMonths);
};
