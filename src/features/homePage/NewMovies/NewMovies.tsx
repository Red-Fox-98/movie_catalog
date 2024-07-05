import { FC, useEffect, useState } from "react";
import Styles from "./NewMovies.module.scss";
import { NewMovieInfo } from "src/shared/api/types";
import Image from "next/image";
import MovieStatusLabel from "../../../entities/homePage/MovieStatusLabel/MovieStatusLabel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { widthMobile } from "@styles/values";

interface NewMoviesProps {
  movieInfo: NewMovieInfo[];
}

const NewMovies: FC<NewMoviesProps> = ({ movieInfo }) => {
  const [widthWindow, setWidthWindow] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    setWidthWindow(typeof window !== "undefined" ? window.innerWidth : 0);
  }, [widthWindow]);

  return (
    <div className={Styles.listNewMovies}>
      <div className={Styles.title}>Новинки</div>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={widthWindow <= widthMobile ? 2 : 4}
        className={Styles.contentNewMovies}
      >
        {movieInfo.map((movie) => (
          <SwiperSlide key={movie.id} className={Styles.movie}>
            <Image src={movie.preview} alt={"preview"} width={216} height={324} priority />
            <div className={Styles.badgeWrapper}>
              <div className={Styles.rating}>{movie.rating.toLocaleString("ru", { minimumFractionDigits: 1 })}</div>
              {typeof movie.status !== "undefined" && <MovieStatusLabel status={movie.status} />}
            </div>
            <div className={Styles.info}>
              <div className={Styles.name}>{movie.name}</div>
              <div
                className={Styles.time}
              >{`${movie.year}, ${movie.numberOfHours} часа ${movie.numberOfMinutes} минут`}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewMovies;
