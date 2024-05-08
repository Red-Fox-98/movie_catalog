import { MovieStatus } from '../../../entities/homePage/MovieStatusLabel/types';

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
  rating: number;
  status?: MovieStatus;
  name: string;
  year: number;
  numberOfHours: number;
  numberOfMinutes: number;
}
