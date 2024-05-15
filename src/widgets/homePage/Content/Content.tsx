import { FC } from "react";
import Styles from "./HomepageContent.module.scss";
import NewMovies from "../../../features/homePage/NewMovies/NewMovies";

import { NewMoviesInfoMock } from "src/shared/api/home/mock";
import Promo from "src/features/homePage/Promo/Promo";

const HomepageContent: FC = () => {
  return (
    <div className={Styles.content}>
      <NewMovies movieInfo={NewMoviesInfoMock} />
      <Promo />
    </div>
  );
};

export default HomepageContent;
