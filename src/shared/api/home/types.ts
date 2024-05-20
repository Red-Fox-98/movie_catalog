import { MovieStatus } from "src/entities/homePage/MovieStatusLabel/types";

export interface MovieInfo {
  preview: string;
  logo: string;
  rating: string;
  year: number;
  genre: string;
  country: string;
  ageRating?: string;
}

export interface NewMovieInfo {
  id: number;
  preview: string;
  rating: string;
  status?: MovieStatus;
  name: string;
  year: number;
  numberOfHours: number;
  numberOfMinutes: number;
}

export interface MovieWeek {
  id: number;
  preview: string;
}
