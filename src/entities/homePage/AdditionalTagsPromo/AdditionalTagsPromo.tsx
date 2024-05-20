import { FC } from "react";
import Styles from "./AdditionalTagsPromo.module.scss";

import Grade from "src/shared/uikit/icons/Grade";
import Device from "src/shared/uikit/icons/Device";
import MovieTape from "src/shared/uikit/icons/MovieTape";
import Star from "src/shared/uikit/icons/Star";
import PromoTag from "src/entities/homePage/PromoTag/PromoTag";

const AdditionalTagsPromo: FC = () => {
  return (
    <div className={Styles.catalog_additional_tags_grid}>
      <div className={Styles.catalog_additional_tags_left}>
        <PromoTag icon={<Grade />} value={"От 149 ₽ в месяц"} />
        <PromoTag icon={<MovieTape />} value={"Никакой рекламы"} />
      </div>
      <div className={Styles.catalog_additional_tags_right}>
        <PromoTag icon={<Device />} value={"Доступно на любом устройстве"} />
        <PromoTag icon={<Star />} value={"Единая подписка без доплат"} />
      </div>
    </div>
  );
};

export default AdditionalTagsPromo;
