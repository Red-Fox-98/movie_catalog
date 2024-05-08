import { FC } from 'react';
import Style from './Tags.module.scss';
import { MovieInfo } from '../../../shared/api/home/type';

interface TagsProps {
  movieInfo: MovieInfo;
}

const Tags: FC<TagsProps> = ({ movieInfo }) => {
  return (
    <div className={Style.tags}>
      <div className={Style.rating}>{movieInfo['rating']}</div>
      <div className={Style.tag}>{movieInfo['year']}</div>
      <div className={Style.tag}>{movieInfo['genre']}</div>
      <div className={Style.tag}>{movieInfo['country']}</div>
      <div className={Style.tag}>{movieInfo['ageRating']}</div>
    </div>
  );
};

export default Tags;
