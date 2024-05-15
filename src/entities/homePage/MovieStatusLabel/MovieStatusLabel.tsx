import { FC } from "react";
import { MovieStatus } from "./types";
import { useTranslation } from "react-i18next";
import Styles from "./MovieStatusLabel.module.scss";

interface MovieStatusLabelProps {
  status: MovieStatus;
}

const MovieStatusLabel: FC<MovieStatusLabelProps> = ({ status }) => {
  const { t } = useTranslation();
  return <div className={Styles.status}>{t(`homePage.movieStatus.${status}`)}</div>;
};

export default MovieStatusLabel;
