import { FC } from "react";
import Styles from "./Tags.module.scss";
import { MovieInfo } from "../../../shared/api/home/types";

interface TagsProps {
  movieInfo: MovieInfo;
}

const Tags: FC<TagsProps> = ({ movieInfo }) => {
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

export default Tags;
