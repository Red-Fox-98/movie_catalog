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
type videoType = "trailer" | "season";

export interface VideoInformation {
  id: number;
  type: videoType;
  season?: number;
  episode?: number;
  preview: string;
  duration: string;
  status?: string;
}

export interface AdditionalMovieInformation {
  description: string;
}

export interface IReview {
  id: number;
  name: string;
  day: number;
  month: number;
  year: number;
  appraisal: number;
  commentary: string;
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
