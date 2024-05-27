import { FC } from "react";
import Styles from "./TrailerSection.module.scss";
import Image from "next/image";
import { MovieInfo } from "src/shared/api/home/types";
import TrailerSectionTags from "src/entities/TrailerSectionTags/TrailerSectionTags";
import { useTranslation } from "react-i18next";

/*icons*/
import Marker from "../../shared/uikit/icons/Marker";
import Heart from "../../shared/uikit/icons/Heart";
import Share from "../../shared/uikit/icons/Share";
import Button from "../../shared/uikit/Button/Button";
import { useRouter } from "next/router";
import { clsx } from "clsx";
import RightArrow from "src/shared/uikit/icons/RightArrow";

export type TrailerSectionType = "home" | "movie";

interface TrailerSectionProps {
  pageType: TrailerSectionType;
  movieInfo: MovieInfo;
}

const TrailerSection: FC<TrailerSectionProps> = ({ pageType, movieInfo }) => {
  const currentLink = useRouter();
  const { t } = useTranslation();
  const currentWidth = typeof window !== "undefined" && window.outerWidth;

  return (
    <div
      className={clsx(Styles.trailerSection, pageType === "movie" && Styles.trailerSectionMovie)}
    >
      {pageType === "movie" && (
        <button
          className={Styles.backward}
          onClick={() => window.location.assign("http://localhost:3000")}
        >
          <div className={Styles.leftArrow}>
            <RightArrow />
          </div>
          {"Назад"}
        </button>
      )}
      <div
        className={clsx(
          Styles.preview,
          currentLink.pathname === "/" ? Styles.preview : Styles.previewMovie
        )}
      >
        <Image src={movieInfo["preview"]} alt={"preview"} width={1231} height={692} priority />
      </div>
      <div className={Styles.info}>
        <div className={clsx(currentLink.pathname === "/" ? Styles.logo : Styles.logoMovie)}>
          <Image src={movieInfo["logo"]} alt={"logo"} width={338} height={101} />
        </div>
        <TrailerSectionTags pageType={pageType} movieInfo={movieInfo} />
        {pageType === "movie" && <div className={Styles.description}>{movieInfo.description}</div>}
        <div
          className={clsx(
            Styles.buttonsBlock,
            currentLink.pathname === "/" && Styles.hideButtonsBlock
          )}
        >
          <div className={Styles.primaryBtn}>
            <Button
              value={t(`movieCatalog.pageType.${pageType}`)}
              variant={"primary"}
              size={currentWidth <= 375 ? "m" : "l"}
              isWide={true}
              link={movieInfo.link}
            />
          </div>

          <div className={Styles.softkeyGroup}>
            <Button
              value={<Marker />}
              variant={"secondary"}
              size={currentWidth <= 375 ? "m" : "l"}
              isWide={currentWidth <= 375}
            />
            <Button
              value={<Heart />}
              variant={"secondary"}
              size={currentWidth <= 375 ? "m" : "l"}
              isWide={currentWidth <= 375}
            />
            <Button
              value={<Share />}
              variant={"secondary"}
              size={currentWidth <= 375 ? "m" : "l"}
              isWide={currentWidth <= 375}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
