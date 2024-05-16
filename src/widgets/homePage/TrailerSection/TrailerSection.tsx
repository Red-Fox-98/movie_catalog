import { FC } from "react";
import Styles from "./TrailerSection.module.scss";
import Image from "next/image";
import { MovieInfo } from "src/shared/api/home/types";

/*icons*/
import Marker from "../../../shared/uikit/icons/Marker";
import Heart from "../../../shared/uikit/icons/Heart";
import Share from "../../../shared/uikit/icons/Share";
import Button from "../../../shared/uikit/Button/Button";
import TrailerSectionTagsTags from "src/entities/homePage/TrailerSectionTags/TrailerSectionTagsTags";

interface TrailerSectionProps {
  movieInfo: MovieInfo;
}

const TrailerSection: FC<TrailerSectionProps> = ({ movieInfo }) => {
  return (
    <div className={Styles.trailerSection}>
      <Image
        className={Styles.preview}
        src={movieInfo["preview"]}
        alt={"preview"}
        width={1231}
        height={692}
        priority
      />
      <div className={Styles.info}>
        <Image src={movieInfo["logo"]} alt={"logo"} width={338} height={101} />
        <TrailerSectionTagsTags movieInfo={movieInfo} />
        <div className={Styles.buttonsBlock}>
          <Button value={"Подробнее"} variant={"primary"} size={"l"} isWide={true} />
          <div className={Styles.softkeyGroup}>
            <Button value={<Marker />} variant={"secondary"} size={"l"} />
            <Button value={<Heart />} variant={"secondary"} size={"l"} />
            <Button value={<Share />} variant={"secondary"} size={"l"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
