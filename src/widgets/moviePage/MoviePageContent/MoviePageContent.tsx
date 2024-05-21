import { FC } from "react";
import Styles from "./MoviePageContent.module.scss";
import VideoContent from "src/features/moviePage/VideoContent/VideoContent";
import {
  AdditionalMovieInformationMock,
  MovieInfoMock,
  VideoInformationMock
} from "src/shared/api/home/mock";
import FurtherInformation from "src/features/moviePage/FurtherInformation/FurtherInformation";

const MoviePageContent: FC = () => {
  return (
    <div className={Styles.content}>
      <VideoContent countSeasons={MovieInfoMock.seasonsNumber} videos={VideoInformationMock} />
      <FurtherInformation info={AdditionalMovieInformationMock} />
    </div>
  );
};

export default MoviePageContent;
