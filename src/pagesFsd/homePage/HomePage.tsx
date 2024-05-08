import { FC } from 'react';
import Styles from './HomePage.module.scss';
import TrailerSection from '../../widgets/homePage/TrailerSection/TrailerSection';

import { MovieInfoMock } from '../../shared/api/home/mock';
import HomepageContent from '../../widgets/homePage/HomepageContent/HomepageContent';

const HomePage: FC = () => {
  return (
    <div className={Styles.home}>
      <TrailerSection movieInfo={MovieInfoMock} />
      <HomepageContent />
    </div>
  );
};

export default HomePage;
