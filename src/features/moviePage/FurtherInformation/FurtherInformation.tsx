import { FC, useState } from "react";
import Styles from "./FurtherInformation.module.scss";
import { AdditionalMovieInformation } from "src/shared/api/home/types";
import { useTranslation } from "react-i18next";
import Attention from "src/shared/uikit/icons/Attention";
import { clsx } from "clsx";

interface FurtherInformationProps {
  info: AdditionalMovieInformation;
}

const FurtherInformation: FC<FurtherInformationProps> = ({ info }) => {
  const [currentTitleInfo, setCurrentTitleInfo] = useState("description");
  const InformationTitle = ["description", "filmCrew", "information"];
  const { t } = useTranslation();

  const changeInformation = (title: string) => {
    setCurrentTitleInfo(title);
  };

  return (
    <div className={Styles.content}>
      <div className={Styles.headlines}>
        {InformationTitle.map((title) => (
          <button
            key={title}
            onClick={() => changeInformation(title)}
            className={clsx(Styles.titleBtn, title === currentTitleInfo && Styles.activeTitleBtn)}
          >
            {t(`moviePage.informationTitle.${title}`)}
          </button>
        ))}
      </div>
      <div className={Styles.text}>{info[currentTitleInfo]}</div>
      <div className={Styles.attention}>
        <Attention />
        <div className={Styles.attentionText}>
          Контент может содержать сцены курения и употребления спиртных напитков. Курение и
          чрезмерное употребление алкоголя вредит вашему здоровью.
        </div>
      </div>
    </div>
  );
};

export default FurtherInformation;
