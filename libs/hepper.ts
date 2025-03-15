export const getFormattedDate = (day: number, month: number, year: number) => {
  return new Date(
    new Date().getFullYear() - year,
    month + 1,
    day + 1
  ).toUTCString();
};
