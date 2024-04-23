import { FC } from 'react';
import Styles from './Footer.module.scss';
import YT from './icons/YT';
import VK from './icons/VK';
import TG from './icons/TG';

const Footer: FC = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.socialMediaForm}>
        <button className={Styles.supportButton}>Написать в поддержку</button>
        <div className={Styles.socialNetworks}>
          <a href='#'>
            Youtube
            <div className={Styles.socialIcon}>
              <YT />
            </div>
          </a>
          <a href='#'>
            ВКонтакте
            <div className={Styles.socialIcon}>
              <VK />
            </div>
          </a>
          <a href='#'>
            Telegram
            <div className={Styles.socialIcon}>
              <TG />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
