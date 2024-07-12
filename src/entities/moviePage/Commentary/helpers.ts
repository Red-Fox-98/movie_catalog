export const dateCreation = (year: number, month: number, day: number) => {
  const date = new Date(year, month - 1, day).toLocaleDateString("ru", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return date.slice(0, -3);
};
