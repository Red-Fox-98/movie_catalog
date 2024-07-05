import { FC } from "react";
import Styles from "./MoviePage.module.scss";
import { clsx } from "clsx";
import { tTNormsPro } from "@styles/fonts";
import TrailerSection from "src/widgets/trailerSection/TrailerSection";
import { AdditionalMovieInformationMock, MovieInfoMock, ReviewsMock, VideoInformationMock } from "src/shared/api/mock";
import MoviePageContent from "src/widgets/moviePage/MoviePageContent/MoviePageContent";

const MoviePage: FC = () => {
  return (
    <div className={clsx(tTNormsPro.variable, Styles.movie)}>
      <TrailerSection pageType={"movie"} moviesInfo={MovieInfoMock} />
      <MoviePageContent
        data={{
          countSeasons: MovieInfoMock[0].countSeasons,
          videos: VideoInformationMock,
          infoMovie: AdditionalMovieInformationMock,
          ratingMovie: MovieInfoMock[0].rating,
          review: ReviewsMock
        }}
      />
    </div>
  );
};

export default MoviePage;
