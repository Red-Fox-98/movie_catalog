import { FC } from "react";
import Styles from "./VideoContent.module.scss";
import { VideoInformation } from "src/shared/api/home/types";
import { clsx } from "clsx";
import Video from "src/features/moviePage/Video/Video";

interface VideoContentProps {
  countSeasons: number;
  videos: VideoInformation[];
}

const VideoContent: FC<VideoContentProps> = ({ countSeasons, videos }) => {
  const getSeasonNumbers = (i = 0) => {
    const seasonNumbers: number[] = [];
    while (i < countSeasons) {
      seasonNumbers.push(++i);
    }
    return seasonNumbers;
  };

  return (
    <div className={Styles.content}>
      <div className={Styles.headlines}>
        <div className={Styles.title}>{"Трейлер"}</div>
        {countSeasons > 0 &&
          getSeasonNumbers().map((seasonNumber) => (
            <div
              className={clsx(
                Styles.title,
                seasonNumber === videos[0]?.season && Styles.activeTitle
              )}
              key={seasonNumber}
            >{`${seasonNumber} сезон`}</div>
          ))}
      </div>
      {videos.length !== 0 && <Video videos={videos} />}
    </div>
  );
};

export default VideoContent;
