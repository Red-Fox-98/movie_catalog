import { FC } from "react";
import Styles from "./Promo.module.scss";
import { clsx } from "clsx";
import { drukWideCy } from "@styles/fonts";
import Image from "next/image";

import PromoNotice from "src/entities/homePage/PromoNotice/PromoNotice";
import AdditionalTagsPromo from "src/entities/homePage/AdditionalTagsPromo/AdditionalTagsPromo";
import Button from "src/shared/uikit/Button/Button";

import popcorn from "src/shared/uikit/images/Promo/Popcorn.png";
import colors from "src/shared/uikit/images/Promo/Colors.png";

const Promo: FC = () => {
  return (
    <div className={Styles.promo}>
      <div className={clsx(drukWideCy.variable, Styles.title)}>Смотри зарубежное кино</div>
      <AdditionalTagsPromo />
      <div className={Styles.button}>
        <Button value={"Смотреть 7 дней за 0₽"} variant={"primary"} size={"s"} isWide={true} />
      </div>

      <div className={Styles.background}>
        <div className={Styles.image}>
          <Image src={popcorn} alt={"image"} />
        </div>
        <div className={Styles.colors}>
          <Image src={colors} alt={"image"} />
        </div>
        <PromoNotice value={"Субтитры"} top={77} left={251} rotation={-13.77} />
        <PromoNotice value={"Дубляж"} top={158} left={280} rotation={26.7} />
        <PromoNotice value={"Full HD"} top={238} left={265} rotation={-13.77} />
      </div>
    </div>
  );
};

export default Promo;
