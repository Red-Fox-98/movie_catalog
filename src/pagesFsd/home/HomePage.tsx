import { FC } from "react";
import Style from "./HomePage.module.scss";
import Image from "next/image";
import { movieInformationModuleMock, recommendedMovieImages } from "../../shared/api/home/mock";

const HomePage: FC = () => {
  return (
    <div className={Style.trailer_section}>
      <Image src={recommendedMovieImages["preview"]} alt={"preview"} width={960} height={574} />
      <div className={Style.info}>
        <Image src={recommendedMovieImages["logo"]} alt={"logo"} width={338} height={101} />
        <div className={Style.tags}>
          <div className={Style.rating}>{movieInformationModuleMock["rate"]}</div>
        </div>
      </div>
    </div>);
};

export default HomePage;
