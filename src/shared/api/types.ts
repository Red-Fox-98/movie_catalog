import { MovieStatus } from "src/entities/homePage/MovieStatusLabel/types";

export interface MovieInfo {
  id: number;
  name: string;
  description: string;
  link: string;
  preview: string;
  logo: string;
  rating: number;
  year: number;
  genre: string;
  country: string;
  ageRating: string;
  countSeasons: number;
}

type videoType = "trailer" | "season";
type statusType = "reviewed" | "notViewed";

export interface VideoInformation {
  id: number;
  type: videoType;
  season?: number;
  episode?: number;
  preview: string;
  numberOfMinutes: number;
  numberOfSeconds: number;
  status?: statusType;
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
  rating: number;
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
