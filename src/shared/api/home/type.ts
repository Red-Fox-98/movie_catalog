export interface MovieInfo {
  preview: string;
  logo: string;
  rating: number;
  year: number;
  genre: string;
  country: string;
  ageRating?: string;
}

export interface NewMovieInfo {
  id: number;
  preview: string;
  name?: string;
  rating?: number;
  year?: number;
  duration?: number;
}
