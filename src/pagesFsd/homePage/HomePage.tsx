import { FC } from "react";
import Styles from "./HomePage.module.scss";
import TrailerSection from "../../widgets/homePage/TrailerSection/TrailerSection";

import { MovieInfoMock } from "src/shared/api/home/mock";
import HomepageContent from "../../widgets/homePage/Content/Content";
import { clsx } from "clsx";
import { tTNormsPro } from "@styles/fonts";

const HomePage: FC = () => {
  return (
    <div className={clsx(tTNormsPro.variable, Styles.home)}>
      <TrailerSection movieInfo={MovieInfoMock} />
      <HomepageContent />
    </div>
  );
};

export default HomePage;
