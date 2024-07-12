import { AdditionalMovieInformation, IReview, VideoInformation } from "src/shared/api/types";

export interface MoviePageData {
  countSeasons: number;
  videos: VideoInformation[];
  infoMovie: AdditionalMovieInformation;
  ratingMovie: number;
  review: IReview[];
}
