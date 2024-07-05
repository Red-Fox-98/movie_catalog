import { FC } from "react";
import Styles from "./MoviePageContent.module.scss";
import VideoContent from "src/features/moviePage/VideoContent/VideoContent";
import FurtherInformation from "src/features/moviePage/FurtherInformation/FurtherInformation";
import Review from "src/features/moviePage/Review/Review";
import { MoviePageData } from "src/widgets/moviePage/MoviePageContent/types";

interface MoviePageContentProps {
  data: MoviePageData;
}

const MoviePageContent: FC<MoviePageContentProps> = ({ data }) => {
  return (
    <div className={Styles.content}>
      <VideoContent countSeasons={data.countSeasons} videos={data.videos} />
      <FurtherInformation info={data.infoMovie} />
      <Review reviews={data.review} rating={data.ratingMovie} />
    </div>
  );
};

export default MoviePageContent;
