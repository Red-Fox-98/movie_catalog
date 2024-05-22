import { FC } from "react";
import Styles from "./MoviePageContent.module.scss";
import VideoContent from "src/features/moviePage/VideoContent/VideoContent";
import {
  AdditionalMovieInformationMock,
  MovieInfoMock,
  ReviewsMock,
  VideoInformationMock
} from "src/shared/api/home/mock";
import FurtherInformation from "src/features/moviePage/FurtherInformation/FurtherInformation";
import Review from "src/features/moviePage/Reviews/Review";

const MoviePageContent: FC = () => {
  return (
    <div className={Styles.content}>
      <VideoContent countSeasons={MovieInfoMock.seasonsNumber} videos={VideoInformationMock} />
      <FurtherInformation info={AdditionalMovieInformationMock} />
      <Review reviews={ReviewsMock} />
    </div>
  );
};

export default MoviePageContent;
