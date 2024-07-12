import { MovieWeek, NewMovieInfo } from "src/shared/api/types";

export interface HomepageData {
  movies: NewMovieInfo[];
  weakTop: MovieWeek[];
}
