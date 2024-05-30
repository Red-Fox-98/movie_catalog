import { FC } from "react";
import Styles from "./Promo.module.scss";
import { clsx } from "clsx";
import { drukWideCy } from "@styles/fonts";
import Image from "next/image";

import PromoNotice from "src/entities/homePage/PromoNotice/PromoNotice";
import AdditionalTagsPromo from "src/entities/homePage/AdditionalTagsPromo/AdditionalTagsPromo";
import Button from "src/shared/uikit/Button/Button";
import colors from "src/shared/uikit/images/Promo/Colors.png";
import Popcorn from "src/shared/uikit/images/Promo/Popcorn";

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
          <Popcorn />
        </div>
        <div className={Styles.colors}>
          <Image src={colors} alt={"image"} priority />
        </div>
        <PromoNotice value={"Субтитры"} className={Styles.adaptive1} />
        <PromoNotice value={"Дубляж"} className={Styles.adaptive2} />
        <PromoNotice value={"Full HD"} className={Styles.adaptive3} />
      </div>
    </div>
  );
};

export default Promo;
