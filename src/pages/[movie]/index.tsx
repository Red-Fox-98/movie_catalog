import { NextPage } from "next";
import MainTemplate from "src/widgets/template/MainTemplate/MainTemplate";
import MoviePage from "src/pagesFsd/moviePage/MoviePage";

const Movie: NextPage = () => {
  return (
    <MainTemplate>
      <MoviePage />
    </MainTemplate>
  );
};

export default Movie;
