import { FC } from "react";
import Styles from "./TrailerSectionTags.module.scss";
import { MovieInfo } from "src/shared/api/home/types";

interface TagsProps {
  movieInfo: MovieInfo;
}

const TrailerSectionTags: FC<TagsProps> = ({ movieInfo }) => {
  return (
    <div className={Styles.tags}>
      <div className={Styles.rating}>{movieInfo["rating"]}</div>
      <div className={Styles.tag}>{movieInfo["year"]}</div>
      <div className={Styles.tag}>{movieInfo["genre"]}</div>
      <div className={Styles.tag}>{movieInfo["country"]}</div>
      <div className={Styles.tag}>{movieInfo["ageRating"]}</div>
    </div>
  );
};

export default TrailerSectionTags;
