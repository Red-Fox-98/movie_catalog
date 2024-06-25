import { FC } from "react";
import { VideoInformation } from "src/shared/api/home/types";
import Styles from "./Video.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { videoTypeCheck } from "./helpers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface VideoProps {
  videoBlockTitle: string; // Опять же - завязываться на заголовке - не лучшая идея. Лучше на номере сезона
  videos: VideoInformation[];
}

const Video: FC<VideoProps> = ({ videoBlockTitle, videos }) => {
  const { t } = useTranslation();

  return (
    <Swiper watchSlidesProgress={true} slidesPerView={3} className={Styles.series}>
      {videos.map(
        // Лучше сверху подготовить отфильтрованный массив видео (через useMemo)
        // и потом уже его отображать через map без всяких проверок
        (video) =>
          videoTypeCheck(videoBlockTitle, t(`moviePage.movieTitle.${video.type}`), video.season) && (
            <SwiperSlide key={video.id} className={Styles.video}>
              <div className={Styles.preview}>
                <Image src={video.preview} alt={"preview"} width={325} height={198} />
                <div className={Styles.duration}>{video.duration}</div>
              </div>
              <div className={Styles.info}>
                {video.episode && <div className={Styles.episodeNumber}>{`${video.episode} серия`}</div>}
                {video.status && <div className={Styles.statusEpisode}>{video.status}</div>}
              </div>
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
};

export default Video;
