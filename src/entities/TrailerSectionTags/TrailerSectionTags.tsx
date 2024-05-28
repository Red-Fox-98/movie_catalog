import { FC } from "react";
import Styles from "./TrailerSectionTags.module.scss";
import { MovieInfo } from "src/shared/api/home/types";
import { clsx } from "clsx";
import { TrailerSectionType } from "src/widgets/trailerSection/TrailerSection";

interface TagsProps {
  pageType: TrailerSectionType;
  movieInfo: MovieInfo;
}

const TrailerSectionTags: FC<TagsProps> = ({ pageType, movieInfo }) => {
  return (
    <div className={Styles.tags}>
      <div className={Styles.rating}>{movieInfo["rating"]}</div>
      <div className={Styles.tag}>{movieInfo["year"]}</div>
      <div className={Styles.tag}>{movieInfo["genre"]}</div>
      <div className={Styles.tag}>{movieInfo["country"]}</div>
      <div className={clsx(Styles.tag, pageType === "home" && Styles.hideLastTag)}>
        {movieInfo["ageRating"]}
      </div>
    </div>
  );
};

export default TrailerSectionTags;
