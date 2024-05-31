import { FC, useState } from "react";
import Styles from "./VideoContent.module.scss";
import { VideoInformation } from "src/shared/api/home/types";
import { clsx } from "clsx";
import Video from "src/features/moviePage/Video/Video";
import { getTitles } from "src/features/moviePage/VideoContent/helpers";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface VideoContentProps {
  countSeasons: number;
  videos: VideoInformation[];
}

const VideoContent: FC<VideoContentProps> = ({ countSeasons, videos }) => {
  const { t } = useTranslation();
  const [currentTitle, setCurrentTitle] = useState(`1 ${t("moviePage.movieTitle.season")}`);
  const currentWidth = typeof window !== "undefined" && window.innerWidth;
  const headlines: string[] = countSeasons
    ? [].concat([t("moviePage.movieTitle.trailer")], getTitles(countSeasons, t("moviePage.movieTitle.season")))
    : [t("moviePage.movieTitle.trailer")];

  const changeCurrentTitle = (title: string) => {
    setCurrentTitle(title);
  };

  return (
    <div className={Styles.content}>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={currentWidth <= 375 ? 4 : headlines.length}
        className={Styles.headlines}
      >
        {countSeasons > 0 &&
          headlines.map((title) => (
            <SwiperSlide key={title} className={clsx(Styles.titleBtn, title === currentTitle && Styles.activeTitle)}>
              <button onClick={() => changeCurrentTitle(title)}>{title}</button>
            </SwiperSlide>
          ))}
      </Swiper>
      {videos.length !== 0 && <Video videoBlockTitle={currentTitle} videos={videos} />}
    </div>
  );
};

export default VideoContent;
