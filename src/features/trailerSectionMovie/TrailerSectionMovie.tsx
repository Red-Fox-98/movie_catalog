import { FC, useEffect, useState } from "react";
import { MovieInfo } from "src/shared/api/types";
import { TrailerSectionType } from "src/widgets/trailerSection/TrailerSection";
import Styles from "./TrailerSectionMovie.module.scss";
import LeftArrow from "src/shared/uikit/icons/LeftArrow";
import Link from "next/link";
import { clsx } from "clsx";
import Image from "next/image";
import TrailerSectionTags from "src/entities/trailerSectionTags/TrailerSectionTags";
import { useTranslation } from "react-i18next";
import { getSizeBtn } from "./helpers";
import Button, { SizeType } from "src/shared/uikit/Button/Button";

/*icons*/
import Marker from "src/shared/uikit/icons/Marker";
import Heart from "src/shared/uikit/icons/Heart";
import Share from "src/shared/uikit/icons/Share";

interface TrailerSectionMovieProps {
  pageType: TrailerSectionType;
  movie: MovieInfo;
  widthWindow: number;
}

const TrailerSectionMovie: FC<TrailerSectionMovieProps> = ({ pageType, movie, widthWindow }) => {
  const [sizeBtn, setSizeBtn] = useState<SizeType>("l");
  const { t } = useTranslation();

  useEffect(() => {
    setSizeBtn(getSizeBtn(widthWindow));
  }, [widthWindow]);

  return (
    <div className={clsx(Styles.trailerSection, pageType === "movie" && Styles.trailerSectionMovie)}>
      {pageType === "movie" && (
        <button className={Styles.backward}>
          <a href={"http://localhost:3000"}>
            <LeftArrow />
            {"Назад"}
          </a>
        </button>
      )}

      <Link href={`/${movie.link}`}>
        <div className={clsx(Styles.preview, pageType === "home" ? Styles.preview : Styles.previewMovie)}>
          <Image src={movie.preview} alt={"preview"} width={1231} height={692} priority />
        </div>
      </Link>

      <div className={Styles.info}>
        <div className={clsx(pageType === "home" ? Styles.logo : Styles.logoMovie)}>
          <Image src={movie.logo} alt={"logo"} width={338} height={101} />
        </div>
        <TrailerSectionTags pageType={pageType} movieInfo={movie} />
        {pageType === "movie" && <div className={Styles.description}>{movie.description}</div>}
        <div className={clsx(Styles.buttonsBlock, pageType === "home" && Styles.hideButtonsBlock)}>
          <Button
            value={t(`movieCatalog.pageType.${pageType}`)}
            variant={"primary"}
            size={sizeBtn}
            isWide={true}
            link={movie.link}
          />

          <div className={Styles.softkeyGroup}>
            <Button value={<Marker />} variant={"secondary"} size={sizeBtn} isWide={true} />
            <Button value={<Heart />} variant={"secondary"} size={sizeBtn} isWide={true} />
            <Button value={<Share />} variant={"secondary"} size={sizeBtn} isWide={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerSectionMovie;
