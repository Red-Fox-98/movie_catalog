export const getTitles = (countSeasons: number, season: string, i = 0) => {
  const seasonNumbers: string[] = [];
  while (seasonNumbers.length < countSeasons) {
    seasonNumbers.push(`${++i} ${season}`);
  }
  return seasonNumbers;
};
