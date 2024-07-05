export const getTitles = (countSeasons: number, t: (key: string) => string) => {
  const seasons = [...new Array(countSeasons)].map((_, index) => `${index + 1} ${t("moviePage.movieTitle.season")}`);
  return [t("moviePage.movieTitle.trailer"), ...seasons];
};
