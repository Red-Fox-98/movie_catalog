import { FC, useEffect } from "react";
import Styles from "./NewMovies.module.scss";
import { NewMovieInfo } from "../../../shared/api/home/types";
import Image from "next/image";
import MovieStatusLabel from "../../../entities/homePage/MovieStatusLabel/MovieStatusLabel";

interface NewMoviesProps {
  movieInfo: NewMovieInfo[];
}

const NewMovies: FC<NewMoviesProps> = ({ movieInfo }) => {
  useEffect(() => {
    const movies = typeof document !== "undefined" && document.getElementById("movies");
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      movies.scrollBy({
        left: event.deltaY < 0 ? -32 : 32
      });
    };

    movies.addEventListener("wheel", onWheel);
    return () => movies.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className={Styles.listNewMovies}>
      <div className={Styles.title}>Новинки</div>
      <div className={Styles.contentNewMovies} id={"movies"}>
        {movieInfo.map((movie) => (
          <div key={movie.id} className={Styles.movie}>
            <Image src={movie.preview} alt={"preview"} width={216} height={324} priority />
            <div className={Styles.badgeWrapper}>
              <div className={Styles.rating}>{movie.rating}</div>
              {typeof movie.status !== "undefined" && <MovieStatusLabel status={movie.status} />}
            </div>
            <div className={Styles.info}>
              <div className={Styles.name}>{movie.name}</div>
              <div
                className={Styles.time}
              >{`${movie.year}, ${movie.numberOfHours} часа ${movie.numberOfMinutes} минут`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewMovies;
