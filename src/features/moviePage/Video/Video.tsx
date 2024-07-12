import { FC, useMemo } from "react";
import { VideoInformation } from "src/shared/api/types";
import Styles from "./Video.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { videosCheck } from "./helpers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface VideoProps {
  sectionNumber: number;
  videos: VideoInformation[];
}

const Video: FC<VideoProps> = ({ sectionNumber, videos }) => {
  const { t } = useTranslation();
  const listOfVideos = useMemo(() => videosCheck(sectionNumber, videos), [sectionNumber, videos]);

  return (
    <Swiper watchSlidesProgress={true} slidesPerView={2} className={Styles.series}>
      {listOfVideos.map((video) => (
        <SwiperSlide key={video.id} className={Styles.video}>
          <div className={Styles.preview}>
            <Image src={video.preview} alt={"preview"} width={325} height={198} />
            <div className={Styles.duration}>{`${video.numberOfMinutes}:${video.numberOfSeconds}`}</div>
          </div>
          <div className={Styles.info}>
            {video.episode && (
              <div className={Styles.episodeNumber}>{`${video.episode} ${t("moviePage.movieTitle.series")}`}</div>
            )}
            {video.status && <div className={Styles.statusEpisode}>{t(`moviePage.movieStatus.${video.status}`)}</div>}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Video;
