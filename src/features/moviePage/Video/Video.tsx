import { FC, useEffect } from "react";
import { VideoInformation } from "src/shared/api/home/types";
import Styles from "./Video.module.scss";
import Image from "next/image";

interface VideoProps {
  videos: VideoInformation[];
}

const Video: FC<VideoProps> = ({ videos }) => {
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
      {videos.map((video) => (
        <div key={video.id} className={Styles.episode}>
          <div className={Styles.preview}>
            <Image src={video.preview} alt={"preview"} width={325} height={198} />
            <div className={Styles.duration}>{video.duration}</div>
          </div>
          <div className={Styles.info}>
            <div className={Styles.episodeNumber}>{`${video.episode} серия`}</div>
            <div className={Styles.statusEpisode}>{video.statusEpisode}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;
