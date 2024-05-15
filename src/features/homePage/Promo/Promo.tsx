import { FC } from "react";
import Styles from "./Promo.module.scss";
import { clsx } from "clsx";
import { drukWideCy } from "@styles/fonts";
import AdditionalTags from "src/entities/homePage/AdditionalTags/AdditionalTags";
import Button from "src/shared/uikit/Button/Button";

const Promo: FC = () => {
  return (
    <div className={Styles.promo}>
      <div className={clsx(drukWideCy.variable, Styles.title)}>Смотри зарубежное кино</div>
      <AdditionalTags />
      <div className={Styles.button}>
        <Button value={"Смотреть 7 дней за 0₽"} variant={"primary"} size={"s"} isWide={true} />
      </div>
    </div>
  );
};

export default Promo;
