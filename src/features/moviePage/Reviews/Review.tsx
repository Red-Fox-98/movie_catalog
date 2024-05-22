import { FC, useEffect } from "react";
import Styles from "./Review.module.scss";
import RightArrow from "src/shared/uikit/icons/RightArrow";
import Commentary from "src/entities/moviePage/Commentary/Commentary";
import { IReview } from "src/shared/api/home/types";

interface ReviewProps {
  reviews: IReview[];
}

const Review: FC<ReviewProps> = ({ reviews }) => {
  useEffect(() => {
    const movies = typeof document !== "undefined" && document.getElementById("comments");
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      movies.scrollBy({
        left: event.deltaY < 0 ? -32 : 32
      });
    };

    movies.addEventListener("wheel", onWheel);
    return () => movies.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className={Styles.content}>
      <div className={Styles.headlines}>
        <div className={Styles.reviewTvoe}>
          {"Рейтинг TVOЁ 8.4"}
          <button className={Styles.createReviewBtn}>{"Поставить оценку"}</button>
        </div>
        <div className={Styles.sectiondTitle}>
          <div className={Styles.title}>{"Отзывы"}</div>
          <div className={Styles.icon}>
            <RightArrow />
          </div>
        </div>
      </div>

      <div className={Styles.comments} id={"comments"}>
        {reviews.map((review) => (
          <Commentary key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Review;
