import { FC, useState } from "react";
import Styles from "./VideoContent.module.scss";
import { VideoInformation } from "src/shared/api/home/types";
import { clsx } from "clsx";
import Video from "src/features/moviePage/Video/Video";
import { getTitles } from "src/features/moviePage/VideoContent/helpers";
import { useTranslation } from "react-i18next";

interface VideoContentProps {
  countSeasons: number;
  videos: VideoInformation[];
}

const VideoContent: FC<VideoContentProps> = ({ countSeasons, videos }) => {
  const { t } = useTranslation();
  const [currentTitle, setCurrentTitle] = useState(`1 ${t("moviePage.movieTitle.season")}`);
  const headlines: string[] = countSeasons
    ? [].concat(
        [t("moviePage.movieTitle.trailer")],
        getTitles(countSeasons, t("moviePage.movieTitle.season"))
      )
    : [t("moviePage.movieTitle.trailer")];

  const changeCurrentTitle = (title: string) => {
    setCurrentTitle(title);
  };

  return (
    <div className={Styles.content}>
      <div className={Styles.headlines}>
        {countSeasons > 0 &&
          headlines.map((title) => (
            <button
              key={title}
              onClick={() => changeCurrentTitle(title)}
              className={clsx(Styles.titleBtn, title === currentTitle && Styles.activeTitle)}
            >
              {title}
            </button>
          ))}
      </div>
      {videos.length !== 0 && <Video videoBlockTitle={currentTitle} videos={videos} />}
    </div>
  );
};

export default VideoContent;
