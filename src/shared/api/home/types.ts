import { MovieStatus } from "src/entities/homePage/MovieStatusLabel/types";

export interface MovieInfo {
  name: string;
  description: string;
  link: string;
  preview: string;
  logo: string;
  rating: string;
  year: number;
  genre: string;
  country: string;
  ageRating: string;
  seasonsNumber?: number;
}

export interface VideoInformation {
  id: number;
  season?: number;
  episode?: number;
  preview: string;
  duration: string;
  statusEpisode: string;
}

export interface AdditionalMovieInformation {
  description: string;
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
