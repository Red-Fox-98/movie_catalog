import { FC } from "react";
import Style from "./HomePage.module.scss"
import TrailerSection from "../../entities/Home/TrailerSection/TrailerSection";

import { MovieInfoMock } from "../../shared/api/home/mock";

const HomePage: FC = () => {
  return (
    <div className={Style.home}>
      <TrailerSection movieInfo={MovieInfoMock} />
    </div>
  );
};

export default HomePage;
