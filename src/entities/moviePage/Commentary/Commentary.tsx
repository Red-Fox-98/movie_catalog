import { FC, useState } from "react";
import Styles from "./Commentary.module.scss";
import { IReview } from "src/shared/api/home/types";
import { dateCreation } from "src/entities/moviePage/Commentary/helpers";
import { clsx } from "clsx";

interface CommentaryProps {
  review: IReview;
}

const Commentary: FC<CommentaryProps> = ({ review }) => {
  const [isOpen, setIsOpen] = useState(false);

  const textStateChange = (isOpen: boolean) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx(Styles.comment, isOpen && Styles.expandedText)}>
      <div className={Styles.title}>
        <div className={Styles.name}>{review.name}</div>
        <div className={Styles.date}>{dateCreation(review.year, review.month, review.day)}</div>
        <div className={Styles.rating}>{review.appraisal}</div>
      </div>
      <div className={clsx(Styles.text, isOpen && Styles.expandedText)}>{review.commentary}</div>

      <button className={Styles.commentBtn} onClick={() => textStateChange(isOpen)}>
        {isOpen ? "Свернуть" : "Читать дальше"}
      </button>
    </div>
  );
};

export default Commentary;
