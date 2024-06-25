import { FC, useState } from "react";
import Styles from "./FurtherInformation.module.scss";
import { AdditionalMovieInformation } from "src/shared/api/home/types";
import { useTranslation } from "react-i18next";
import Attention from "src/shared/uikit/icons/Attention";
import { clsx } from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface FurtherInformationProps {
  info: AdditionalMovieInformation;
}

const FurtherInformation: FC<FurtherInformationProps> = ({ info }) => {
  const { t } = useTranslation();

  const currentWidth = typeof window !== "undefined" && window.innerWidth;

  // Преврати это все в enum или union type. Потому, что в данный момент можно впихнуть все что угодно в функцию по смене категории
  const InformationTitle = ["description", "filmCrew", "information"];
  const [currentTitleInfo, setCurrentTitleInfo] = useState("description");
  const changeInformation = (title: string) => {
    setCurrentTitleInfo(title);
  };

  return (
    <div className={Styles.content}>
      <Swiper watchSlidesProgress={true} slidesPerView={currentWidth <= 375 ? 2 : 3} className={Styles.headlines}>
        {InformationTitle.map((title) => (
          <SwiperSlide key={title} className={clsx(Styles.titleBtn, title === currentTitleInfo && Styles.activeTitleBtn)}>
            <button onClick={() => changeInformation(title)}>{t(`moviePage.informationTitle.${title}`)}</button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={Styles.text}>{info[currentTitleInfo]}</div>
      <div className={Styles.attention}>
        <div className={Styles.icon}>
          <Attention />
        </div>
        <div className={Styles.attentionText}>
          Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя
          вредит вашему здоровью.
        </div>
      </div>
    </div>
  );
};

export default FurtherInformation;
