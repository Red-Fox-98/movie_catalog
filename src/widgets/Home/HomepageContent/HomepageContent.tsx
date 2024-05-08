import { FC } from 'react';
import Styles from './HomepageContent.module.scss';
import NewMovies from '../../../features/Home/NewMovies/NewMovies';

import { NewMoviesInfoMock } from '../../../shared/api/home/mock';

const HomepageContent: FC = () => {
  return (
    <div className={Styles.content}>
      <div className={Styles.listNewMovies}>
        <div className={Styles.title}>Новинки</div>
        <NewMovies movieInfo={NewMoviesInfoMock} />
      </div>
    </div>
  );
};

export default HomepageContent;
