import { FC } from "react";
import Styles from "./HomepageContent.module.scss";
import NewMovies from "../../../features/homePage/NewMovies/NewMovies";

import { moviesWeekMock, NewMoviesInfoMock } from "src/shared/api/home/mock";
import Promo from "src/features/homePage/Promo/Promo";
import WeekTop from "src/features/homePage/WeekTop/WeekTop";

const HomepageContent: FC = () => {
  return (
    <div className={Styles.content}>
      <NewMovies movieInfo={NewMoviesInfoMock} />
      <Promo />
      <WeekTop movies={moviesWeekMock} />
    </div>
  );
};

export default HomepageContent;
