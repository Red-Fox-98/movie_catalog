import { FC } from "react";
import Styles from "./MoviePage.module.scss";
import { clsx } from "clsx";
import { tTNormsPro } from "@styles/fonts";
import TrailerSection from "src/widgets/trailerSection/TrailerSection";
import { MovieInfoMock } from "src/shared/api/home/mock";
import MoviePageContent from "src/widgets/moviePage/MoviePageContent/MoviePageContent";

const MoviePage: FC = () => {
  return (
    <div className={clsx(tTNormsPro.variable, Styles.movie)}>
      <TrailerSection pageType={"movie"} moviesInfo={MovieInfoMock} />
      <MoviePageContent />
    </div>
  );
};

export default MoviePage;
