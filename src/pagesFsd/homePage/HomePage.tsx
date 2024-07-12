import { FC } from "react";
import Styles from "./HomePage.module.scss";
import TrailerSection from "src/widgets/trailerSection/TrailerSection";

import { MovieInfoMock, MoviesWeekMock, NewMoviesInfoMock } from "src/shared/api/mock";
import HomepageContent from "src/widgets/homePage/HomepageContent/HomepageContent";

const HomePage: FC = () => {
  return (
    <div className={Styles.home}>
      <TrailerSection pageType={"home"} moviesInfo={MovieInfoMock} />
      <HomepageContent data={{ movies: NewMoviesInfoMock, weakTop: MoviesWeekMock }} />
    </div>
  );
};

export default HomePage;
