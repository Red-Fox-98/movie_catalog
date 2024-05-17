import { FC, useEffect } from "react";
import { MovieWeek } from "src/shared/api/home/types";
import Image from "next/image";
import Styles from "./WeekTop.module.scss";
import { clsx } from "clsx";
import { drukWideCy } from "@styles/fonts";
import { getTheNumbers } from "src/shared/uikit/numbers/Numbers";

interface WeekTopProps {
  movies: MovieWeek[];
}

const WeekTop: FC<WeekTopProps> = ({ movies }) => {
  const numbers = getTheNumbers();

  useEffect(() => {
    const movies = typeof document !== "undefined" && document.getElementById("topMovies");

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
    <div className={Styles.moviesWeek}>
      <div className={clsx(drukWideCy.variable, Styles.title)}>Топ недели</div>
      <div className={Styles.movies} id={"topMovies"}>
        {movies.map((movie) => (
          <div key={movie.id} className={Styles.movie}>
            {numbers[movie.id].number}
            <div className={Styles.peviewMovie}>
              <Image src={movie.preview} alt={"preview"} width={246} height={370} priority />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekTop;
