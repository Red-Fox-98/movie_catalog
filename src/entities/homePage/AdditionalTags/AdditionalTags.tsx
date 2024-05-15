import { FC } from "react";
import Styles from "./AdditionalTags.module.scss";
import Grade from "src/shared/uikit/icons/Grade";
import Device from "src/shared/uikit/icons/Device";
import MovieTape from "src/shared/uikit/icons/MovieTape";
import Star from "src/shared/uikit/icons/Star";

const AdditionalTags: FC = () => {
  return (
    <div className={Styles.catalog_additional_tags_grid}>
      <div className={Styles.catalog_additional_tags_left}>
        <div className={Styles.additional_tag}>
          <div className={Styles.icon}>
            <Grade />
          </div>
          <div className={Styles.title}>От 149 ₽ в месяц</div>
        </div>
        <div className={Styles.additional_tag}>
          <div className={Styles.icon}>
            <MovieTape />
          </div>
          <div className={Styles.title}>Никакой рекламы</div>
        </div>
      </div>
      <div className={Styles.catalog_additional_tags_right}>
        <div className={Styles.additional_tag}>
          <div className={Styles.icon}>
            <Device />
          </div>
          <div className={Styles.title}>Доступно на любом устройстве</div>
        </div>
        <div className={Styles.additional_tag}>
          <div className={Styles.icon}>
            <Star />
          </div>
          <div className={Styles.title}>Единая подписка без доплат</div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalTags;
