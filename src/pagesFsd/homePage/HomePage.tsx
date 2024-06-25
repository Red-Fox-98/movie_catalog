import { FC } from "react";
import Styles from "./HomePage.module.scss";
import TrailerSection from "src/widgets/trailerSection/TrailerSection";

import { MovieInfoMock } from "src/shared/api/home/mock";
import HomepageContent from "src/widgets/homePage/HomepageContent/HomepageContent";

const HomePage: FC = () => {
  return (
    <div className={Styles.home}>
      {/*Свайпер не свайпается*/}
      <TrailerSection pageType={"home"} moviesInfo={MovieInfoMock} />
      <HomepageContent />
    </div>
  );
};

export default HomePage;
