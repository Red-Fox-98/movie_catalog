import { FC, useEffect, useState } from "react";
import Styles from "./FurtherInformation.module.scss";
import { AdditionalMovieInformation } from "src/shared/api/types";
import { useTranslation } from "react-i18next";
import Attention from "src/shared/uikit/icons/Attention";
import { clsx } from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { widthMobile } from "@styles/values";

type TitlesType = "description" | "filmCrew" | "information";

interface FurtherInformationProps {
  info: AdditionalMovieInformation;
}

const FurtherInformation: FC<FurtherInformationProps> = ({ info }) => {
  const { t } = useTranslation();
  const InformationTitle: TitlesType[] = ["description", "filmCrew", "information"];
  const [currentTitleInfo, setCurrentTitleInfo] = useState("description");
  const [widthWindow, setWidthWindow] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    setWidthWindow(typeof window !== "undefined" ? window.innerWidth : 0);
  }, []);

  const changeInformation = (title: string) => {
    setCurrentTitleInfo(title);
  };

  return (
    <div className={Styles.content}>
      <Swiper watchSlidesProgress={true} slidesPerView={widthWindow <= widthMobile ? 2 : 3} className={Styles.headlines}>
        {InformationTitle.map((title) => (
          <SwiperSlide key={title} className={clsx(Styles.titleBtn, title === currentTitleInfo && Styles.activeTitleBtn)}>
            <button onClick={() => changeInformation(title)}>{t(`moviePage.informationTitle.${title}`)}</button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={Styles.text}>{info[currentTitleInfo as keyof typeof info]}</div>
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
