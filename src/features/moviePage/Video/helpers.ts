export const videoTypeCheck = (title: string, type: string, season?: number): boolean => {
  if (`${season} ${type}` === title) return true;
  else if (type === title) return true;
  return false;
};
