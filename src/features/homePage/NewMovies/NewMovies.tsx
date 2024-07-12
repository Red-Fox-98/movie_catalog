import { FC } from "react";
import Styles from "./NewMovies.module.scss";
import { NewMovieInfo } from "src/shared/api/types";
import Image from "next/image";
import MovieStatusLabel from "../../../entities/homePage/MovieStatusLabel/MovieStatusLabel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { widthMobile } from "@styles/values";
import { useMaineTemplateContext } from "src/widgets/template/MainTemplate/MainTemplate";

interface NewMoviesProps {
  movieInfo: NewMovieInfo[];
}

const NewMovies: FC<NewMoviesProps> = ({ movieInfo }) => {
  const { width } = useMaineTemplateContext();

  return (
    <div className={Styles.listNewMovies}>
      <div className={Styles.title}>Новинки</div>
      <Swiper watchSlidesProgress={true} slidesPerView={width <= widthMobile ? 2 : 4} className={Styles.contentNewMovies}>
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
