import { FC } from "react";
import { MovieWeek } from "src/shared/api/types";
import Image from "next/image";
import Styles from "./WeekTop.module.scss";
import { clsx } from "clsx";
import { drukWideCy } from "@styles/fonts";
import { getTheNumbers } from "src/shared/uikit/numbers/Numbers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface WeekTopProps {
  movies: MovieWeek[];
}

const WeekTop: FC<WeekTopProps> = ({ movies }) => {
  const numbers = getTheNumbers();

  return (
    <div className={Styles.moviesWeek}>
      <div className={clsx(drukWideCy.variable, Styles.title)}>Топ недели</div>
      <Swiper watchSlidesProgress={true} slidesPerView={3} className={Styles.movies}>
        {movies.map((movie, index) => (
          <SwiperSlide key={movie.id} className={Styles.movie}>
            <div className={Styles.number}>{numbers[index].number} </div>
            <div className={Styles.previewMovie}>
              <Image src={movie.preview} alt={"preview"} width={246} height={370} priority />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WeekTop;
