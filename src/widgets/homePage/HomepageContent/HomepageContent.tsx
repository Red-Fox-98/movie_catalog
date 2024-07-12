import { FC } from "react";
import Styles from "./HomepageContent.module.scss";
import NewMovies from "../../../features/homePage/NewMovies/NewMovies";

import Promo from "src/features/homePage/Promo/Promo";
import WeekTop from "src/features/homePage/WeekTop/WeekTop";
import { HomepageData } from "src/widgets/homePage/HomepageContent/types";

interface HomepageContentProps {
  data: HomepageData;
}

const HomepageContent: FC<HomepageContentProps> = ({ data }) => {
  return (
    <div className={Styles.content}>
      <NewMovies movieInfo={data.movies} />
      <Promo />
      <WeekTop movies={data.weakTop} />
    </div>
  );
};

export default HomepageContent;
