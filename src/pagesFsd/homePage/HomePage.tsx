import { FC } from "react";
import Styles from "./HomePage.module.scss";
import TrailerSection from "src/widgets/trailerSection/TrailerSection";

import { MovieInfoMock } from "src/shared/api/home/mock";
import HomepageContent from "src/widgets/homePage/HomepageContent/HomepageContent";
import { clsx } from "clsx";
import { tTNormsPro } from "@styles/fonts";

const HomePage: FC = () => {
  return (
    <div className={clsx(tTNormsPro.variable, Styles.home)}>
      <TrailerSection pageType={"home"} movieInfo={MovieInfoMock} />
      <HomepageContent />
    </div>
  );
};

export default HomePage;
