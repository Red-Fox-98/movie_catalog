import { FC, useEffect, useState } from "react";
import Styles from "./TrailerSection.module.scss";
import { MovieInfo } from "src/shared/api/types";
import { hideSwiper } from "./helpers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { clsx } from "clsx";
import { widthMobile } from "@styles/values";

/*icons*/
import TrailerSectionMovie from "src/features/trailerSectionMovie/TrailerSectionMovie";

export type TrailerSectionType = "home" | "movie";

interface TrailerSectionProps {
  pageType: TrailerSectionType;
  moviesInfo: MovieInfo[];
}

const TrailerSection: FC<TrailerSectionProps> = ({ pageType, moviesInfo }) => {
  const [widthWindow, setWidthWindow] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    setWidthWindow(Number(window.innerWidth));
    hideSwiper(widthWindow, pageType);
  }, [widthWindow, pageType]);

  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      allowTouchMove={widthWindow <= widthMobile && pageType === "home"}
      modules={[Pagination]}
      className={clsx(Styles.content, pageType === "movie" && Styles.contentMovie)}
    >
      {moviesInfo.map((movieInfo) => (
        <SwiperSlide key={movieInfo.id}>
          <TrailerSectionMovie pageType={pageType} movie={movieInfo} widthWindow={widthWindow} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TrailerSection;
