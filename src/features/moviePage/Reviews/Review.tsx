import { FC } from "react";
import Styles from "./Review.module.scss";
import RightArrow from "src/shared/uikit/icons/RightArrow";
import Commentary from "src/entities/moviePage/Commentary/Commentary";
import { IReview } from "src/shared/api/home/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ReviewProps {
  reviews: IReview[];
}

const Review: FC<ReviewProps> = ({ reviews }) => {
  return (
    <div className={Styles.content}>
      <div className={Styles.headlines}>
        <div className={Styles.reviewTvoe}>
          {"Рейтинг TVOЁ 8.4"}
          {/*Рейтинг тоже нужно передавать в пропсах*/}
          <button className={Styles.createReviewBtn}>{"Поставить оценку"}</button>
        </div>
        <div className={Styles.sectiondTitle}>
          <div className={Styles.title}>{"Отзывы"}</div>
          <div className={Styles.icon}>
            <RightArrow />
          </div>
        </div>
      </div>

      <Swiper watchSlidesProgress={true} slidesPerView={2} className={Styles.comments}>
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className={Styles.comment}>
            <Commentary key={review.id} review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
