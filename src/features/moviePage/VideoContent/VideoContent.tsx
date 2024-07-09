import { FC, useState } from "react";
import Styles from "./VideoContent.module.scss";
import { VideoInformation } from "src/shared/api/types";
import { clsx } from "clsx";
import Video from "src/features/moviePage/Video/Video";
import { getTitles } from "src/features/moviePage/VideoContent/helpers";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { widthMobile } from "@styles/values";
import { useMaineTemplateContext } from "src/widgets/template/MainTemplate/MainTemplate";

interface VideoContentProps {
  countSeasons: number;
  videos: VideoInformation[];
}

const VideoContent: FC<VideoContentProps> = ({ countSeasons, videos }) => {
  const { t } = useTranslation();
  const [currentSection, setCurrentSection] = useState(1);
  const headlines = getTitles(countSeasons, t);
  const { width } = useMaineTemplateContext();

  const changeCurrentTitle = (section: number) => {
    setCurrentSection(section);
  };

  return (
    <div className={Styles.content}>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={width <= widthMobile ? 4 : headlines.length}
        className={Styles.headlines}
      >
        {countSeasons > 0 &&
          headlines.map((title, index) => (
            <SwiperSlide key={title} className={clsx(Styles.titleBtn, index === currentSection && Styles.activeTitle)}>
              <button onClick={() => changeCurrentTitle(index)}>{title}</button>
            </SwiperSlide>
          ))}
      </Swiper>
      {videos.length !== 0 && <Video sectionNumber={currentSection} videos={videos} />}
    </div>
  );
};

export default VideoContent;
