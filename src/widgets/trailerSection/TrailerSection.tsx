import { FC, useEffect, useState } from "react";
import Styles from "./TrailerSection.module.scss";
import Image from "next/image";
import { MovieInfo } from "src/shared/api/home/types";
import TrailerSectionTags from "src/entities/TrailerSectionTags/TrailerSectionTags";
import { useTranslation } from "react-i18next";
import { getSizeBtn, getWidthWindow, hideSwiper } from "./helpers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button, { SizeType } from "../../shared/uikit/Button/Button";
import { useRouter } from "next/router";
import { clsx } from "clsx";

/*icons*/
import Marker from "../../shared/uikit/icons/Marker";
import Heart from "../../shared/uikit/icons/Heart";
import Share from "../../shared/uikit/icons/Share";
import RightArrow from "src/shared/uikit/icons/RightArrow";

export type TrailerSectionType = "home" | "movie";

interface TrailerSectionProps {
  pageType: TrailerSectionType;
  moviesInfo: MovieInfo[];
}

const TrailerSection: FC<TrailerSectionProps> = ({ pageType, moviesInfo }) => {
  const currentLink = useRouter();
  const [widthWindow, setWidthWindow] = useState(typeof window !== "undefined" && window.innerWidth);
  const [sizeBtn, setSizeBtn] = useState<SizeType>("l");
  const { t } = useTranslation();

  useEffect(() => {
    setWidthWindow(getWidthWindow());
    hideSwiper(widthWindow, currentLink);
    setSizeBtn(getSizeBtn(widthWindow));
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      allowTouchMove={widthWindow <= 375 && currentLink.pathname === "/"}
      modules={[Pagination]}
      className={clsx(Styles.content, pageType === "movie" && Styles.contentMovie)}
    >
      {moviesInfo.map((movieInfo) => (
        <SwiperSlide
          key={movieInfo.id}
          className={clsx(Styles.trailerSection, pageType === "movie" && Styles.trailerSectionMovie)}
        >
          {/*Я бы вынес карточку фильма в отдельный компонент*/}
          {pageType === "movie" && (
            <button className={Styles.backward} onClick={() => window.location.assign("http://localhost:3000")}>
              <div className={Styles.leftArrow}>
                <RightArrow />
              </div>
              {"Назад"}
            </button>
          )}
          {/*Не надо делать фон кликабельным. У тебя же есть кнопка "смотреть"*/}
          <div
            className={clsx(Styles.preview, currentLink.pathname === "/" ? Styles.preview : Styles.previewMovie)}
            onClick={() => window.location.assign(` http://localhost:3000/${movieInfo.link}`)}
          >
            <Image src={movieInfo["preview"]} alt={"preview"} width={1231} height={692} priority />
          </div>
          <div className={Styles.info}>
            {/* Ты много раз используешь currentLink.pathname === "/" Может вынести в переменную? */}
            {/* И вообще зачем это? У тебя же есть pageType */}
            <div className={clsx(currentLink.pathname === "/" ? Styles.logo : Styles.logoMovie)}>
              <Image src={movieInfo["logo"]} alt={"logo"} width={338} height={101} />
            </div>
            <TrailerSectionTags pageType={pageType} movieInfo={movieInfo} />
            {pageType === "movie" && <div className={Styles.description}>{movieInfo.description}</div>}
            <div className={clsx(Styles.buttonsBlock, currentLink.pathname === "/" && Styles.hideButtonsBlock)}>
              <Button
                value={t(`movieCatalog.pageType.${pageType}`)}
                variant={"primary"}
                size={sizeBtn}
                isWide={true}
                link={movieInfo.link}
              />

              <div className={Styles.softkeyGroup}>
                <Button value={<Marker />} variant={"secondary"} size={sizeBtn} />
                <Button value={<Heart />} variant={"secondary"} size={sizeBtn} />
                <Button value={<Share />} variant={"secondary"} size={sizeBtn} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TrailerSection;
