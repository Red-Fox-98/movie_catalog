import { FC } from "react";
import Styles from "./TrailerSection.module.scss";
import Image from "next/image";
import { MovieInfo } from "src/shared/api/home/types";

/*icons*/
import Marker from "../../shared/uikit/icons/Marker";
import Heart from "../../shared/uikit/icons/Heart";
import Share from "../../shared/uikit/icons/Share";
import Button from "../../shared/uikit/Button/Button";
import TrailerSectionTags from "src/entities/TrailerSectionTags/TrailerSectionTags";
import { useTranslation } from "react-i18next";

type TrailerSectionType = "home" | "movie";

interface TrailerSectionProps {
  pageType: TrailerSectionType;
  movieInfo: MovieInfo;
}

const TrailerSection: FC<TrailerSectionProps> = ({ movieInfo, pageType }) => {
  const { t } = useTranslation();
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
        <TrailerSectionTags movieInfo={movieInfo} />
        {pageType === "movie" && <div className={Styles.description}>{movieInfo.description}</div>}
        <div className={Styles.buttonsBlock}>
          <Button
            value={t(`movieCatalog.pageType.${pageType}`)}
            variant={"primary"}
            size={"l"}
            isWide={true}
            link={movieInfo.link}
          />
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
