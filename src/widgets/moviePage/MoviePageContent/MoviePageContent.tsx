import { FC } from "react";
import Styles from "./MoviePageContent.module.scss";
import VideoContent from "src/features/moviePage/VideoContent/VideoContent";

const MoviePageContent: FC = () => {
  return (
    <div className={Styles.content}>
      <VideoContent />
    </div>
  );
};

export default MoviePageContent;
