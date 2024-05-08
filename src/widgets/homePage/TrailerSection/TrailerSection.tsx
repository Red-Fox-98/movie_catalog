import { FC } from 'react';
import Styles from './TrailerSection.module.scss';
import Image from 'next/image';
import { MovieInfo } from '../../../shared/api/home/types';

/*icons*/
import Marker from '../../../shared/uikit/icons/Marker';
import Heart from '../../../shared/uikit/icons/Heart';
import Share from '../../../shared/uikit/icons/Share';
import Button from '../../../shared/uikit/Button/Button';
import Tags from '../../../entities/homePage/Tags/Tags';

interface TrailerSectionProps {
  movieInfo: MovieInfo;
}

const TrailerSection: FC<TrailerSectionProps> = ({ movieInfo }) => {
  return (
    <div className={Styles.trailerSection}>
      <Image
        className={Styles.preview}
        src={movieInfo['preview']}
        alt={'preview'}
        width={1231}
        height={692}
        priority
      />
      <div className={Styles.info}>
        <Image src={movieInfo['logo']} alt={'logo'} width={338} height={101} />
        <Tags movieInfo={movieInfo} />
        <div className={Styles.buttonsBlock}>
          <Button variant={'primary'} name={'Подробнее'} width={260} height={52} font_size={18} />
          <div className={Styles.buttonsGroup}>
            <Button name={<Marker />} variant={'secondary'} width={64} height={52} />
            <Button name={<Heart />} variant={'secondary'} width={64} height={52} />
            <Button name={<Share />} variant={'secondary'} width={64} height={52} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
