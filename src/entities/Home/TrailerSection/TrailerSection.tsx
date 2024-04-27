import { FC } from 'react';
import Style from './TrailerSection.module.scss';
import Image from 'next/image';
import { MovieInfo } from '../../../shared/api/home/type';

/*icons*/
import Marker from '../../../shared/uikit/icons/Marker';
import Heart from '../../../shared/uikit/icons/Heart';
import Share from '../../../shared/uikit/icons/Share';

interface TrailerSectionProps {
  movieInfo: MovieInfo;
}

const TrailerSection: FC<TrailerSectionProps> = ({ movieInfo }) => {
  return (
    <div className={Style.trailerSection}>
      <Image src={movieInfo['preview']} alt={'preview'} width={960} height={574} />
      <div className={Style.info}>
        <Image src={movieInfo['logo']} alt={'logo'} width={338} height={101} />
        <div className={Style.tags}>
          <div className={Style.rating}>{movieInfo['rate']}</div>
          <div className={Style.tag}>{movieInfo['year']}</div>
          <div className={Style.tag}>{movieInfo['genre']}</div>
          <div className={Style.tag}>{movieInfo['country']}</div>
          <div className={Style.tag}>{movieInfo['ageRating']}</div>
        </div>
        <div className={Style.buttonsBlock}>
          <button className={Style.buttonDesktop}>Подробнее</button>
          <div className={Style.buttonsGroup}>
            <button>
              <Marker />
            </button>
            <button>
              <Heart />
            </button>
            <button>
              <Share />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
