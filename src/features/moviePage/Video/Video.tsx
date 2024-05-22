import { FC, useEffect } from "react";
import { VideoInformation } from "src/shared/api/home/types";
import Styles from "./Video.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { videoTypeCheck } from "./helpers";

interface VideoProps {
  videoBlockTitle: string;
  videos: VideoInformation[];
}

const Video: FC<VideoProps> = ({ videoBlockTitle, videos }) => {
  const { t } = useTranslation();
  useEffect(() => {
    const movies = typeof document !== "undefined" && document.getElementById("series");
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      movies.scrollBy({
        left: event.deltaY < 0 ? -32 : 32
      });
    };

    movies.addEventListener("wheel", onWheel);
    return () => movies.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className={Styles.series} id={"series"}>
      {videos.map(
        (video) =>
          videoTypeCheck(
            videoBlockTitle,
            t(`moviePage.movieTitle.${video.type}`),
            video.season
          ) && (
            <div key={video.id} className={Styles.video}>
              <div className={Styles.preview}>
                <Image src={video.preview} alt={"preview"} width={325} height={198} />
                <div className={Styles.duration}>{video.duration}</div>
              </div>
              <div className={Styles.info}>
                {video.episode && (
                  <div className={Styles.episodeNumber}>{`${video.episode} серия`}</div>
                )}
                {video.status && <div className={Styles.statusEpisode}>{video.status}</div>}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Video;
