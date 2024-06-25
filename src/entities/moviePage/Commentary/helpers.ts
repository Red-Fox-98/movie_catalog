export const dateCreation = (year: number, month: number, day: number) => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ];

  return `${day} ${months[month - 1]} ${year}`; // Замени это на toLocalDateString и подредактируй
};
