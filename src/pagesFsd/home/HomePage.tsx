import { FC } from 'react';
import Style from './HomePage.module.scss';
import TrailerSection from '../../widgets/Home/TrailerSection/TrailerSection';

import { MovieInfoMock } from '../../shared/api/home/mock';
import HomepageContent from '../../widgets/Home/HomepageContent/HomepageContent';

const HomePage: FC = () => {
  return (
    <div className={Style.home}>
      <TrailerSection movieInfo={MovieInfoMock} />
      <HomepageContent />
    </div>
  );
};

export default HomePage;
